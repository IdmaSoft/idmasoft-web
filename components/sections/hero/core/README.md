# Hero cube — notas de contexto

Este directorio implementa el cubo 3D animado del hero (`HeroSection` → `HeroCore` → `Cube` → 6× `CubeFace`). Es un cubo CSS con `perspective`/`rotateX`/`rotateY` que, al hacer scroll, se agranda, rota y "explota" en 6 tarjetas separadas. Estas notas documentan decisiones no obvias descubiertas ajustando esto contra decenas de tamaños de pantalla reales — léelas antes de tocar los números de `cubeLayout.ts` o `cubeFaces.ts`, para no volver a pisar los mismos problemas.

## Mapa de archivos

- `HeroSection.tsx` — contenedor del scroll (240vh, sticky), calcula `scrollYProgress`.
- `HeroContent.tsx` — texto/botones, se desvanece con el scroll. `z-20` explícito.
- `HeroCore.tsx` — traduce `progress` (scroll) en las motion values `scale`, `explode`, `rotate`, `spread`, `adjust`. `z-0 isolate` explícito (ver "Por qué `isolate`").
- `Cube.tsx` — arma el cubo: tamaños, profundidad, posición inicial, opacidad de "ya hidratado".
- `CubeFace.tsx` — posiciona una cara: rotación + `spread` (posición base por dirección) + `adjust` (ajuste fino por cara).
- `cubeFaces.ts` — contenido de cada cara + `adjustments` (vector x/y/z afinado a mano, por breakpoint).
- `cubeLayout.ts` — toda la config de tamaños (`cubeLayoutConfig`) y el sistema dinámico de escalado (`computeCubeMovement`, `computeFaceScale`, `computeInitialNudge`).
- `cube.css` — la geometría 3D real (transforms estáticos por cara, `perspective`, `preserve-3d`).

## Por qué existe un sistema "dinámico" y no solo 3 breakpoints

El diseño original solo tenía 3 configs fijas (mobile/tablet/desktop, por **ancho**). Eso se rompía en cualquier viewport con una relación alto/ancho distinta a la "típica" del breakpoint: Nest Hub (1024×600), iPad Pro portrait (1024×1366), celulares rotados (anchos de 660-930 con solo 360-430px de alto). `computeCubeMovement`/`computeFaceScale`/`computeInitialNudge` calculan la posición/tamaño en función del **viewport real** (ancho Y alto), usando como referencia los tamaños donde ya se verificó visualmente que se ve bien (`refWidthAvail`/`refHeightAvail` en `movementBounds`).

## Gotchas descubiertos (no reinventar la rueda)

1. **`z-index: auto` no es confiable contra una jerarquía `preserve-3d`/`perspective` anidada.** En teoría un hermano con `z-20` explícito siempre pinta encima de uno con `z-index: auto`, pero en la práctica el cubo (con su cadena de `preserve-3d`) a veces se renderizaba encima del texto igual. Fix: `HeroCore` tiene `z-0 isolate` explícito — nunca dejes ese contenedor en `z-index: auto`.

2. **El ajuste diagonal de `front`/`back` (`adjustment.x`) debe multiplicarse por el tamaño de tarjeta *sin comprimir* (`idealFaceSize`), no por el tamaño ya reducido por `faceScale`.** Si usás el tamaño comprimido, en un viewport corto (donde `faceScale` achica la tarjeta) el empuje horizontal se reduce justo cuando más ancho sobra. Ver `adjustX` en `CubeFace.tsx`.

3. **`scaleX` (posición base de `left`/`right`/`top`/`bottom`) y `adjustScaleX` (empuje diagonal de `front`/`back`) son cosas distintas.** `adjustScaleX` está atado a `scaleY * maxXYRatio` para que el vector diagonal afinado a mano no se distorsione cuando X e Y se comprimen de forma muy distinta (celular rotado). `scaleX` NO debe atarse a ese ratio — no hay vector que distorsionar en `left`/`right`/`top`/`bottom`, así que deben poder usar todo el ancho disponible.

4. **El texto de la tarjeta no se achica solo cuando la tarjeta se achica (`faceScale`).** El contenido está anclado abajo (`justify-content: flex-end`), así que si el texto es más alto que la tarjeta comprimida, el ícono y la primera palabra del título se cortan arriba. Fix: `--icon-size`/`--title-size`/`--description-size`/`--face-padding` se escalan por el mismo `faceScale` (ver `scaleRem()` en `Cube.tsx`).

5. **`spreadMax` (qué tan lejos llega la posición base antes de "explotar") debe depender de la orientación, no solo del breakpoint.** Mobile portrait está afinado para un `spreadMax` bajo (0.6); mobile landscape necesita 1 (completo) para aprovechar el ancho. Un solo valor por breakpoint rompe alguno de los dos casos.

6. **Servidor vs. cliente**: el servidor no puede saber el viewport real, así que `useCubeBreakpoint`/`useViewportSize` siempre arrancan con el fallback de desktop (1440×900) — leer `window` directamente en el estado inicial causa un *hydration mismatch* real (React lo detectó y se quedó pegado en los valores del servidor). El patrón correcto: mismo estado inicial en servidor y cliente, corregir en `useLayoutEffect`. Y para que el cubo no aparezca "mal" y luego salte a su lugar correcto, `Cube.tsx` lo mantiene en `opacity: 0` hasta que `useIsHydrated()` (basado en `useSyncExternalStore`, el hook que React recomienda para esto — no un `useState`+`useLayoutEffect` a mano, el linter lo marca como anti-patrón) confirma que ya hidrató.

## Matriz de verificación

Cada vez que se toquen `cubeLayout.ts` o los `adjustments` de `cubeFaces.ts`, volver a probar (sin overlap entre caras, sin clipping contra navbar/bordes) en:

| Caso | Viewport | Por qué importa |
|---|---|---|
| Mobile portrait | 375×812 | Caso base mobile, ya afinado — no debería cambiar nunca |
| Mobile landscape angosto | 667×375 | iPhone SE y similares (<720 ancho → bucket "mobile") |
| Mobile landscape ancho | 890×400 | Vivo V27 y la mayoría de celulares modernos rotados (bucket "tablet") |
| Tablet portrait | 768×1024 | Ancho = referencia exacta de tablet |
| Tablet corta | 900×700 | Tablet con poco alto |
| Desktop | 1440×900, 1440×750, 1920×1080 | Rango normal de laptop/monitor |
| Nest Hub | 1024×600 | Desktop-bucket por ancho, pero muy corto |
| iPad Pro portrait | 1024×1366 | Desktop-bucket por ancho, pero angosto y muy alto |

Método rápido (usando el navegador): `window.scrollTo({top: innerHeight*1.4})` para llegar al estado expandido, medir `getBoundingClientRect()` de cada `.cube-face` y chequear solapamientos + límites contra navbar (64px) y bordes.

## Limitación conocida y aceptada

En celulares muy angostos rotados (ancho <720px, ej. iPhone SE en horizontal), queda algo de overlap residual entre caras — es un límite real del diseño (6 tarjetas de texto en ~250px de alto útil), no algo que se arregle con más ajuste numérico. Se decidió aceptarlo así (ver conversación) en vez de invertir en un layout de respaldo simplificado para ese caso específico.

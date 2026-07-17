// import Connections from "./Connections";
import FloatingCards from "./FloatingCards";

export default function HeroScene() {
  return (
    // <div className="absolute inset-0 z-10">
    <div className="relative mx-auto h-full w-full max-w-7xl translate-y-24">
      {/* Área donde vive el ecosistema */}
      <div className="relative mx-auto h-full w-full max-w-7xl">

        {/* Tarjetas */}
        <FloatingCards />

        {/* Conexiones SVG */}
        {/* <Connections /> */}

      </div>
    </div>
  );
}
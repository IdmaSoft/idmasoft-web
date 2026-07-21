export type CubeSide =
  | "front"
  | "back"
  | "left"
  | "right"
  | "top"
  | "bottom";

export interface CubeFaceData {
  id: string;
  side: CubeSide;

  title: string;

  // (Fase EXPLODE)
  explode: {
    x: number;
    y: number;
    z: number;
  };

  // (Fase TRAVEL)
  target: {
    x: number;
    y: number;
  };
}

export const cubeFaces: CubeFaceData[] = [
  {
    id: "android",
    side: "front",
    title: "Android",
    explode: { x: 0, y: 0, z: 40 },
    target: { x: -420, y: -180 },
  },
  {
    id: "api",
    side: "back",
    title: "API",
    explode: { x: 0, y: 0, z: -40 },
    target: { x: 420, y: -180 },
  },
  {
    id: "dashboard",
    side: "left",
    title: "Dashboard",
    explode: { x: -40, y: 0, z: 0 },
    target: { x: -420, y: 180 },
  },
  {
    id: "website",
    side: "right",
    title: "Website",
    explode: { x: 40, y: 0, z: 0 },
    target: { x: 420, y: 180 },
  },
  {
    id: "database",
    side: "top",
    title: "Database",
    explode: { x: 0, y: -40, z: 0 },
    target: { x: 0, y: -260 },
  },
  {
    id: "automation",
    side: "bottom",
    title: "Automation",
    explode: { x: 0, y: 40, z: 0 },
    target: { x: 0, y: 260 },
  },
];
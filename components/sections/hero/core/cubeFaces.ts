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

  // Fase ROTATE
  rotateToFront: {
    x: number;
    y: number;
  };

  // Fase TRAVEL
  target: {
    x: number;
    y: number;
  };

  spread: {
    x: number;
    y: number;
  };

}

export const cubeFaces: CubeFaceData[] = [
  {
    id: "dashboard",
    side: "front",
    title: "Analytics Dashboard",

    rotateToFront: { x: 0, y: 0 },

    spread: {
      x: 0,
      y: -40,
    },

    target: { x: -420, y: -180 },
  },

  {
    id: "sql",
    side: "back",
    title: "SQL Database",

    rotateToFront: { x: 0, y: 180 },

    spread: {
      x: 0,
      y: 50,
    },

    target: { x: 420, y: -180 },
  },

  {
    id: "android",
    side: "left",
    title: "Android App",

    rotateToFront: { x: 0, y: 90 },

    spread: {
      x: -70,
      y: 0,
    },

    target: { x: -420, y: 180 },
  },

  {
    id: "landing",
    side: "right",
    title: "Next.js Landing",

    rotateToFront: { x: 0, y: -90 },

    spread: {
      x: 70,
      y: 0,
    },

    target: { x: 420, y: 180 },
  },

  {
    id: "nestjs",
    side: "top",
    title: "NestJS API",

    rotateToFront: { x: -90, y: 0 },

    spread: {
      x: 0,
      y: -90,
    },

    target: { x: 0, y: -260 },
  },

  {
    id: "automation",
    side: "bottom",
    title: "Automation Engine",

    rotateToFront: { x: 90, y: 0 },

    spread: {
      x: 0,
      y: 90,
    },

    target: { x: 0, y: 260 },
  },
];

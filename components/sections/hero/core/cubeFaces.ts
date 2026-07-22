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
    id: "android",
    side: "front",
    title: "Android",

    rotateToFront: { x: 0, y: 0 },

    spread: {
      x: 0,
      y: -40,
    },

    target: { x: -420, y: -180 },
  },

  {
    id: "api",
    side: "back",
    title: "API",

    rotateToFront: { x: 0, y: 180 },

    spread: {
      x: 0,
      y: 50,
    },

    target: { x: 420, y: -180 },
  },

  {
    id: "dashboard",
    side: "left",
    title: "Dashboard",

    rotateToFront: { x: 0, y: 90 },

    spread: {
      x: -70,
      y: 0,
    },

    target: { x: -420, y: 180 },
  },

  {
    id: "website",
    side: "right",
    title: "Website",

    rotateToFront: { x: 0, y: -90 },

    spread: {
      x: 70,
      y: 0,
    },

    target: { x: 420, y: 180 },
  },

  {
    id: "database",
    side: "top",
    title: "Database",

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
    title: "Automation",

    rotateToFront: { x: 90, y: 0 },

    spread: {
      x: 0,
      y: 90,
    },

    target: { x: 0, y: 260 },
  },
];

import { type LucideIcon, BarChart3, Database, Globe, Server, Smartphone } from "lucide-react";

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
  description: string;
  icon: LucideIcon;

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
    description: "Business metrics and insights",
    icon: BarChart3,

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
    description: "Reliable data storage",
    icon: Database,

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
    description: "Native mobile application",
    icon: Smartphone,

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
    description: "Modern web experience",
    icon: Globe,

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
    description: "Secure backend services",
    icon: Server,

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
    description: "Automated workflows and deployment pipelines",
    icon: Server,

    rotateToFront: { x: 90, y: 0 },

    spread: {
      x: 0,
      y: 90,
    },

    target: { x: 0, y: 260 },
  },
];

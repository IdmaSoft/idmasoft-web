import { type LucideIcon, BarChart3, Database, Globe, Server, Smartphone } from "lucide-react";
import { type CubeBreakpoint } from "./cubeLayout";

export type CubeSide =
  | "front"
  | "back"
  | "left"
  | "right"
  | "top"
  | "bottom";

export interface CubeFaceAdjustment {
  x: number;
  y: number;
  z: number;
}

export interface CubeFaceData {
  id: string;
  side: CubeSide;

  title: string;
  description: string;
  icon: LucideIcon;

  rotateToFront: {
    x: number;
    y: number;
  };

  adjustments?: Partial<Record<CubeBreakpoint, CubeFaceAdjustment>>;
}

export const cubeFaces: CubeFaceData[] = [
  {
    id: "dashboard",
    side: "front",
    title: "Analytics Dashboard",
    description: "Business metrics and insights",
    icon: BarChart3,

    rotateToFront: { x: 0, y: 0 },
    adjustments: {
      mobile: { x: -0.5, y: 0.5, z: 0 },
      tablet: { x: 0.95, y: 0.95, z: 0.1 },
      desktop: { x: 0.7, y: 0.58, z: 0.1 },
    }

  },

  {
    id: "sql",
    side: "back",
    title: "SQL Database",
    description: "Reliable data storage",
    icon: Database,

    rotateToFront: { x: 0, y: 180 },
    adjustments: {
      mobile: { x: 0, y: -1.4, z: -0.2 },
      tablet: { x: -0.95, y: -1.1, z: -0.1 },
      desktop: { x: -0.7, y: -0.9, z: -0.1 },
    },

  },

  {
    id: "android",
    side: "left",
    title: "Android App",
    description: "Native mobile application",
    icon: Smartphone,

    rotateToFront: { x: 0, y: 90 },
    adjustments: {
      mobile: { x: 0.25, y: -0.25, z: -0.2 },
      tablet: { x: 0.15, y: -0.25, z: 0 },
      desktop: { x: -0.1, y: -0.25, z: 0 },
    },
  },

  {
    id: "landing",
    side: "right",
    title: "Next.js Landing",
    description: "Modern web experience",
    icon: Globe,

    rotateToFront: { x: 0, y: -90 },
    adjustments: {
      mobile: { x: -0.1, y: -0.4, z: 0.1 },
    },
  },

  {
    id: "nestjs",
    side: "top",
    title: "NestJS API",
    description: "Secure backend services",
    icon: Server,

    rotateToFront: { x: -90, y: 0 },
    adjustments: {
      mobile: { x: 0.3, y: -0.1, z: -0.3 },
      tablet: { x: 0, y: -0.22, z: 0.15 },
      desktop: { x: 0, y: 0.15, z: 0.15 },
    },
  },

  {
    id: "automation",
    side: "bottom",
    title: "Automation Engine",
    description: "Automated workflows and deployment pipelines",
    icon: Server,

    rotateToFront: { x: 90, y: 0 },
    adjustments: {
      mobile: { x: -0.5, y: -0.4, z: 0 },
      tablet: { x: 0, y: -0.02, z: 0 },
      desktop: { x: 0, y: -0.35, z: 0 },
    }

  },
];

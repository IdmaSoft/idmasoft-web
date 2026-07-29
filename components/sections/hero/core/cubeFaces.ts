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

  // title/description live in messages/*/home.json under hero.cube.<id> —
  // not here, so there's only one place to edit per language instead of an
  // English copy nobody reads once translations exist (see cubeFaces.ts
  // history for why that split invites confusion).
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
    icon: Smartphone,

    rotateToFront: { x: 0, y: 90 },
    adjustments: {
      mobile: { x: 0.25, y: -0.25, z: -0.2 },
      tablet: { x: 0.2, y: -0.02, z: 0 },
      desktop: { x: 0.2, y: 0.05, z: 0 },
    },
  },

  {
    id: "landing",
    side: "right",
    icon: Globe,

    rotateToFront: { x: 0, y: -90 },
    adjustments: {
      mobile: { x: -0.1, y: -0.4, z: 0.1 },
    },
  },

  {
    id: "nestjs",
    side: "top",
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
    icon: Server,

    rotateToFront: { x: 90, y: 0 },
    adjustments: {
      mobile: { x: -0.5, y: -0.4, z: 0 },
      tablet: { x: 0, y: -0.02, z: 0 },
      desktop: { x: 0, y: -0.35, z: 0 },
    }

  },
];

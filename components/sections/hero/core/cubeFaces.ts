import { type LucideIcon, BarChart3, Database, Globe, Server, Smartphone } from "lucide-react";

export type CubeSide =
  | "front"
  | "back"
  | "left"
  | "right"
  | "top"
  | "bottom";

export type ResponsivePoint = {
  desktop: { x: number; y: number };
  tablet: { x: number; y: number };
  mobile: { x: number; y: number };
};

export type ResponsiveSpread = {
  desktop: {
    x: number;
    y: number;
    z: number;
  };
  tablet: {
    x: number;
    y: number;
    z: number;
  };
  mobile: {
    x: number;
    y: number;
    z: number;
  };
};

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

  target: ResponsivePoint;
  spread: ResponsiveSpread;
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
      desktop: { x: 0, y: 0, z: 0 },
      tablet: { x: 0, y: 0, z: 0 },
      mobile: { x: 0, y: 0, z: 0 },
    },

    target: {
      desktop: { x: -0.55, y: -0.32 },
      tablet: { x: -0.5, y: -0.28 },
      mobile: { x: -0.4, y: -0.22 },
    },
  },

  {
    id: "sql",
    side: "back",
    title: "SQL Database",
    description: "Reliable data storage",
    icon: Database,

    rotateToFront: { x: 0, y: 180 },

    spread: {
      desktop: { x: 0, y: 0, z: 0 },
      tablet: { x: 0, y: 0, z: 0 },
      mobile: { x: 0, y: 0, z: 0 },
    },

    target: {
      desktop: { x: 0.3, y: -0.32 },
      tablet: { x: 0.26, y: -0.28 },
      mobile: { x: 0.22, y: -0.22 },
    },
  },

  {
    id: "android",
    side: "left",
    title: "Android App",
    description: "Native mobile application",
    icon: Smartphone,

    rotateToFront: { x: 0, y: 90 },

    spread: {
      desktop: { x: 0, y: 0, z: 0 },
      tablet: { x: 0, y: 0, z: 0 },
      mobile: { x: 0, y: 0, z: 0 },
    },

    target: {
      desktop: { x: -0.45, y: 0.32 },
      tablet: { x: -0.4, y: 0.28 },
      mobile: { x: -0.3, y: 0.22 },
    },
  },

  {
    id: "landing",
    side: "right",
    title: "Next.js Landing",
    description: "Modern web experience",
    icon: Globe,

    rotateToFront: { x: 0, y: -90 },

    spread: {
      desktop: { x: 0, y: 0, z: 0 },
      tablet: { x: 0, y: 0, z: 0 },
      mobile: { x: 0, y: 0, z: 0 },
    },

    target: {
      desktop: { x: 0.28, y: 0.32 },
      tablet: { x: 0.24, y: 0.28 },
      mobile: { x: 0.2, y: 0.22 },
    },
  },

  {
    id: "nestjs",
    side: "top",
    title: "NestJS API",
    description: "Secure backend services",
    icon: Server,

    rotateToFront: { x: -90, y: 0 },

    spread: {
      desktop: { x: 0, y: 0, z: 0 },
      tablet: { x: 0, y: 0, z: 0 },
      mobile: { x: 0, y: 0, z: 0 },
    },

    target: {
      desktop: { x: 0, y: -0.75 },
      tablet: { x: 0, y: -0.65 },
      mobile: { x: 0, y: -0.55 },
    },
  },

  {
    id: "automation",
    side: "bottom",
    title: "Automation Engine",
    description: "Automated workflows and deployment pipelines",
    icon: Server,

    rotateToFront: { x: 90, y: 0 },

    spread: {
      desktop: { x: 0, y: 0, z: 0 },
      tablet: { x: 0, y: 0, z: 0 },
      mobile: { x: 0, y: 0, z: 0 },
    },

    target: {
      desktop: { x: 0, y: 0.75 },
      tablet: { x: 0, y: 0.65 },
      mobile: { x: 0, y: 0.55 },
    },
  },
];

import {
  BarChart3,
  Database,
  Globe,
  Server,
  Smartphone,
} from "lucide-react";

import { HeroCard } from "./types";

export const heroCards: HeroCard[] = [
  // Upper center
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description: "Business metrics and insights",
    icon: BarChart3,
    x: "47%",
    y: "38%",
  },
  // Left
  {
    id: "android",
    title: "Android App",
    description: "Native mobile application",
    icon: Smartphone,
    x: "26%",
    y: "44%",
  },
  // Right
  {
    id: "landing",
    title: "Next.js Landing",
    description: "Modern web experience",
    icon: Globe,
    x: "70%",
    y: "44%",
  },
  // Lower left
  {
    id: "nestjs",
    title: "NestJS API",
    description: "Secure backend services",
    icon: Server,
    x: "38%",
    y: "60%",
  },
  // Lower right
  {
    id: "sql",
    title: "SQL Database",
    description: "Reliable data storage",
    icon: Database,
    x: "55%",
    y: "60%",
  },
  {
    id: "automation",
    title: "Automation Engine",
    description: "Automated workflows and deployment pipelines",
    icon: Server,
    x: "50%",
    y: "75%",
  },
];
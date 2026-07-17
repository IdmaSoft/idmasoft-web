import {
  BarChart3,
  Database,
  Globe,
  Server,
  Smartphone,
} from "lucide-react";

import { HeroCard } from "./types";

export const heroCards: HeroCard[] = [
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description: "Business metrics and insights",
    icon: BarChart3,
    x: "50%",
    y: "18%",
  },
  {
    id: "android",
    title: "Android App",
    description: "Native mobile application",
    icon: Smartphone,
    x: "12%",
    y: "38%",
  },
  {
    id: "landing",
    title: "Next.js Landing",
    description: "Modern web experience",
    icon: Globe,
    x: "88%",
    y: "38%",
  },
  {
    id: "nestjs",
    title: "NestJS API",
    description: "Secure backend services",
    icon: Server,
    x: "28%",
    y: "74%",
  },
  {
    id: "sql",
    title: "SQL Database",
    description: "Reliable data storage",
    icon: Database,
    x: "72%",
    y: "74%",
  },
];
import type { Service } from "@/lib/types";

export const SERVICES: Service[] = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "End-to-end web and mobile applications built with modern frameworks, clean architecture, and scalable patterns.",
    icon: "Layers",
  },
  {
    id: "backend",
    title: "Backend Architecture",
    description:
      "Robust server-side systems designed for performance, reliability, and long-term maintainability.",
    icon: "Server",
  },
  {
    id: "api",
    title: "API Development",
    description:
      "RESTful and GraphQL APIs built with strong typing, proper documentation, and security best practices.",
    icon: "Plug",
  },
  {
    id: "cloud",
    title: "Cloud Deployment",
    description:
      "Infrastructure setup and cloud deployment on AWS and Azure with CI/CD pipelines and monitoring.",
    icon: "Cloud",
  },
  {
    id: "ai",
    title: "AI Integration",
    description:
      "Integration of AI and machine learning capabilities into existing products and business workflows.",
    icon: "Cpu",
  },
  {
    id: "modernization",
    title: "System Modernization",
    description:
      "Migration and modernization of legacy systems to current technology stacks without disrupting operations.",
    icon: "RefreshCw",
  },
  {
    id: "database",
    title: "Database Design",
    description:
      "Relational and document database design, optimization, and migration strategies for production systems.",
    icon: "Database",
  },
  {
    id: "consulting",
    title: "Software Consulting",
    description:
      "Technical consulting on architecture decisions, technology selection, and software engineering strategy.",
    icon: "MessageCircle",
  },
];

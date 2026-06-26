import type { ProcessStep } from "@/lib/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "Understanding the business context, technical requirements, and success criteria before writing a single line of code.",
  },
  {
    step: 2,
    title: "Architecture",
    description:
      "Designing the system structure, data models, and integration patterns that will support the product at scale.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Building iteratively with clean code standards, code reviews, and continuous integration from day one.",
  },
  {
    step: 4,
    title: "Testing",
    description:
      "Automated testing at unit, integration, and end-to-end levels to ensure correctness and prevent regressions.",
  },
  {
    step: 5,
    title: "Deployment",
    description:
      "Reliable production deployments with CI/CD pipelines, environment configuration, and rollback strategies.",
  },
  {
    step: 6,
    title: "Support",
    description:
      "Ongoing monitoring, maintenance, and iterative improvements after launch to keep systems healthy.",
  },
];

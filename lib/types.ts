export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: "Available" | "Beta" | "Coming Soon";
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud" | "DevOps";
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

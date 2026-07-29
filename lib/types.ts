// These types intentionally omit translatable text fields (name, title,
// description, tagline, category, label). That copy lives in the locale
// message files under messages/*/data/*.json, keyed by id, and gets merged
// in at render time via the useLocalized* hooks in lib/i18n/localize.ts.
// These interfaces only describe the structural, non-translatable shape:
// which items exist, their order, and their non-text data (icons, hrefs,
// status keys, category keys).

export interface Product {
  id: string;
  status: "Available" | "Beta" | "Coming Soon";
  href: string;
}

export interface Service {
  id: string;
  icon: string;
}

export interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud" | "DevOps";
}

export interface Feature {
  id: string;
  icon: string;
}

export interface NavLink {
  id: string;
  href: string;
}

export type LocalizedProduct = Product & {
  name: string;
  tagline: string;
  description: string;
  category: string;
};

export type LocalizedProcessStep = {
  step: number;
  title: string;
  description: string;
};

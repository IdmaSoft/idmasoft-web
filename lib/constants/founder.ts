interface FounderInfo {
  name: string;
  initials: string;
  // Set this once a real photo is available — both FounderPhoto call sites
  // (HomeFounderSection, founder/page.tsx) pick it up automatically.
  photoUrl?: string;
}

export const FOUNDER: FounderInfo = {
  name: "Ivan Merchan",
  initials: "IM",
};

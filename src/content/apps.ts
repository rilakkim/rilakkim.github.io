export type AppConfig = {
  slug: string;
  name: string;
  shortDescription: string;
  supportEmail: string;
};

export const APPS: AppConfig[] = [
  {
    slug: "contraction-timer",
    name: "Contraction Timer",
    shortDescription:
      "Contraction Timer is a simple labor contraction tracking app designed to help expectant parents record contraction duration and intervals calmly and easily.",
    supportEmail: "hyungjun.dev@proton.me",
  },
];

export function getAppBySlug(slug: string) {
  return APPS.find((app) => app.slug === slug);
}

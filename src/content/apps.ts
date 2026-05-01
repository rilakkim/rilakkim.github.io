export type AppConfig = {
  slug: string;
  name: string;
  shortDescription: string;
  supportEmail: string;
  appStoreUrl?: string;
};

export const APPS: AppConfig[] = [
  {
    slug: "contraction-timer",
    name: "Contraction Timer: Labor Track",
    shortDescription:
      "A calm iOS contraction timer that helps expectant parents record contraction duration and interval patterns offline.",
    supportEmail: "hyungjun.dev@proton.me",
    appStoreUrl:
      "https://apps.apple.com/us/app/contraction-timer-labor-track/id6761633950",
  },
];

export function getAppBySlug(slug: string) {
  return APPS.find((app) => app.slug === slug);
}

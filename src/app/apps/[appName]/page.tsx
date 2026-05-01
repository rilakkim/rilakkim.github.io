import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { APPS, getAppBySlug } from "@/content/apps";

type PageProps = {
  params: Promise<{
    appName: string;
  }>;
};

const siteUrl = "https://rilakkim.github.io";

const featureItems = [
  "One-tap contraction start and stop tracking",
  "Contraction history for reviewing previous sessions",
  "Duration and interval insights to help you review patterns",
  "Offline-first recording for stressful moments",
  "A calm, simple interface designed for quick use",
];

const screenshots = [
  {
    src: "/apps/contraction-timer/one-tap.jpeg",
    alt: "Contraction Timer tracking screen with one-tap start and stop timer",
  },
  {
    src: "/apps/contraction-timer/intensity.jpeg",
    alt: "Contraction Timer intensity logging screen",
  },
  {
    src: "/apps/contraction-timer/history.jpeg",
    alt: "Contraction Timer history screen showing saved sessions",
  },
];

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { appName } = await params;
  const app = getAppBySlug(appName);

  if (!app) {
    return {};
  }

  const canonical = `${siteUrl}/apps/${app.slug}`;

  return {
    title: "Contraction Timer: Labor Track",
    description:
      "A calm iOS contraction timer for recording labor contractions, reviewing duration and interval patterns, and keeping history offline.",
    alternates: {
      canonical,
    },
    openGraph: {
      title: "Contraction Timer: Labor Track",
      description:
        "A calm iOS contraction timer for recording labor contractions, reviewing duration and interval patterns, and keeping history offline.",
      url: canonical,
      siteName: "Hyungjun Kim",
      type: "website",
    },
  };
}

export default async function AppMarketingPage({ params }: PageProps) {
  const { appName } = await params;
  const app = getAppBySlug(appName);

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-20 text-white md:px-6 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <section className="grid min-h-[calc(100svh-8rem)] items-center gap-10 lg:grid-cols-[1fr_0.88fr]">
          <div className="max-w-3xl">
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-[#ff8e96]">
              iOS contraction tracking aid
            </p>
            <h1 className="mt-5 font-playfair text-5xl font-bold leading-tight text-white md:text-7xl">
              {app.name}
            </h1>
            <p className="mt-6 max-w-2xl font-montserrat text-lg leading-8 text-white/75 md:text-xl">
              A calm iOS app that helps you record labor contractions, review
              duration and interval patterns, and keep contraction history
              available offline.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {app.appStoreUrl ? (
                <a
                  href={app.appStoreUrl}
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 font-montserrat text-sm font-semibold text-[#101420] transition hover:bg-[#ffe4e6]"
                >
                  Download on the App Store
                </a>
              ) : (
                <span className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-6 font-montserrat text-sm font-semibold text-white/70">
                  App Store link coming soon
                </span>
              )}
              <Link
                href={`/apps/${app.slug}/support`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-6 font-montserrat text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Support / Contact
              </Link>
            </div>
            <p className="mt-6 max-w-2xl font-montserrat text-sm leading-6 text-white/55">
              Contraction Timer: Labor Track is a tracking aid for recording and
              reviewing information. It is not a medical device and does not
              provide medical diagnosis.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]">
            <Image
              src="/apps/contraction-timer/hero.jpeg"
              alt="Contraction Timer: Labor Track preview with contraction history list"
              width={946}
              height={2048}
              priority
              className="h-auto w-full rounded-lg border border-white/15 shadow-2xl shadow-black/40"
            />
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {featureItems.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 font-montserrat text-sm leading-6 text-white/78"
            >
              {item}
            </div>
          ))}
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="font-playfair text-4xl font-semibold text-white md:text-5xl">
              Built for quick recording and calm review.
            </h2>
            <p className="mt-5 font-montserrat text-base leading-8 text-white/72">
              Start and stop contractions in one tap, then review saved history
              with duration and interval context. The app keeps core tracking
              available offline, so recent sessions stay on your device when you
              need to check them.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {screenshots.map((screenshot) => (
              <Image
                key={screenshot.src}
                src={screenshot.src}
                alt={screenshot.alt}
                width={946}
                height={2048}
                className="h-auto w-full rounded-lg border border-white/12 bg-black/20 shadow-xl shadow-black/25"
              />
            ))}
          </div>
        </section>

        <section className="grid gap-4 border-t border-white/10 pt-8 font-montserrat text-sm text-white/65 md:grid-cols-3">
          <Link href={`/apps/${app.slug}/privacy`} className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href={`/apps/${app.slug}/support`} className="hover:text-white">
            Support / Contact
          </Link>
          {app.appStoreUrl ? (
            <a href={app.appStoreUrl} className="hover:text-white">
              App Store
            </a>
          ) : null}
        </section>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return APPS.map((app) => ({
    appName: app.slug,
  }));
}

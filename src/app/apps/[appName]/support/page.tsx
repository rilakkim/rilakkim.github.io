import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AppPageShell from "@/components/app/AppPageShell";
import SupportSection from "@/components/app/SupportSection";
import { APPS, getAppBySlug } from "@/content/apps";

type PageProps = {
  params: Promise<{
    appName: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { appName } = await params;
  const app = getAppBySlug(appName);

  if (!app) {
    return {};
  }

  return {
    title: `${app.name} Support | Hyungjun Kim`,
    description: `Official support page for ${app.name}. Find help, support contact information, troubleshooting guidance, and the privacy policy.`,
  };
}

export default async function AppSupportPage({ params }: PageProps) {
  const { appName } = await params;
  const app = getAppBySlug(appName);

  if (!app) {
    notFound();
  }

  return (
    <AppPageShell
      eyebrow="Support"
      title={`${app.name} Support`}
      intro={app.shortDescription}
    >
      <SupportSection title="Need help?">
        <p>
          If you need help with {app.name}, please contact support at{" "}
          <a
            href={`mailto:${app.supportEmail}`}
            className="text-blue-300 underline decoration-white/20 underline-offset-4 transition hover:text-blue-200"
          >
            {app.supportEmail}
          </a>
          .
        </p>
        <p>
          You can reach out for app issues, bug reports, feature requests, and
          refund or purchase-related questions.
        </p>
        <p className="text-white/60">
          We aim to respond within 2–3 business days.
        </p>
      </SupportSection>

      <SupportSection title="Before you contact support">
        <p>
          Including the details below helps us understand the issue more
          quickly:
        </p>
        <ul className="list-disc space-y-2 pl-5 marker:text-blue-300">
          <li>Device model</li>
          <li>iOS version</li>
          <li>App version</li>
          <li>Description of the issue</li>
          <li>Screenshots if available</li>
        </ul>
      </SupportSection>

      <SupportSection title="FAQ">
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Does the app require an internet connection?
            </h3>
            <p className="mt-2">
              Core contraction tracking is designed to be simple and available
              when you need it. Some features, purchases, or ads may work best
              with an internet connection.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Is my contraction history stored locally?
            </h3>
            <p className="mt-2">
              Yes. Your contraction history is stored locally on your device.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              How do I remove ads or restore purchases?
            </h3>
            <p className="mt-2">
              Use the in-app purchase or restore option in the app. If something
              does not update correctly, contact support and include your device
              details and app version.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              What should I do if the timer seems incorrect?
            </h3>
            <p className="mt-2">
              Close and reopen the app, then try again. If the issue continues,
              send support a short description of what happened and screenshots
              if possible.
            </p>
          </div>
        </div>
      </SupportSection>

      <SupportSection title="Important note">
        <p>
          Contraction Timer is for informational purposes only and is not a
          medical device. If you are experiencing an emergency or severe
          symptoms, contact your healthcare provider immediately.
        </p>
      </SupportSection>

      <nav
        aria-label="Support page links"
        className="flex flex-col gap-3 border-t border-white/10 pt-2 text-sm text-white/70 md:flex-row md:items-center md:justify-between"
      >
        <Link href="/" className="transition hover:text-white">
          Back to home
        </Link>
        <Link
          href={`/apps/${app.slug}/privacy`}
          className="transition hover:text-white"
        >
          View Contraction Timer privacy policy
        </Link>
      </nav>
    </AppPageShell>
  );
}

export async function generateStaticParams() {
  return APPS.map((app) => ({
    appName: app.slug,
  }));
}

import type { ReactNode } from "react";

type SupportSectionProps = {
  title: string;
  children: ReactNode;
};

export default function SupportSection({
  title,
  children,
}: SupportSectionProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
      <h2 className="font-playfair text-2xl font-semibold text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-white/75">
        {children}
      </div>
    </section>
  );
}

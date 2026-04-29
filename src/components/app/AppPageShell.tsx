import type { ReactNode } from "react";

type AppPageShellProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function AppPageShell({
  eyebrow,
  title,
  intro,
  children,
}: AppPageShellProps) {
  return (
    <main className="min-h-screen px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-black/30 p-6 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
        <header className="border-b border-white/10 pb-6">
          {eyebrow ? (
            <p className="mb-3 font-montserrat text-xs uppercase tracking-[0.35em] text-blue-400">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-playfair text-4xl font-bold tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-4 max-w-3xl font-montserrat text-base leading-7 text-white/75 md:text-lg">
              {intro}
            </p>
          ) : null}
        </header>

        <div className="flex flex-col gap-6 font-montserrat">{children}</div>
      </div>
    </main>
  );
}

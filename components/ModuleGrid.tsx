"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { modules } from "@/lib/site";

type ModuleItem = (typeof modules)[number];

export function ModuleGrid() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  const showPrev = useCallback(() => {
    setActive((i) => (i === null ? i : (i - 1 + modules.length) % modules.length));
  }, []);

  const showNext = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % modules.length));
  }, []);

  useEffect(() => {
    if (active === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, showPrev, showNext]);

  const current: ModuleItem | null = active !== null ? modules[active] : null;

  return (
    <>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod, index) => (
          <article
            key={mod.id}
            className="group overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)] transition-shadow hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-brand-soft/40 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              aria-label={`${mod.title} vergrößern`}
            >
              <Image
                src={mod.image}
                alt={mod.alt}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-xl bg-surface/90 text-brand opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                <Expand className="h-4 w-4" aria-hidden />
              </span>
            </button>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground">{mod.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {mod.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {current && active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
            aria-label="Lightbox schließen"
            onClick={close}
          />

          <div className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col">
            <div className="mb-3 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-sm font-semibold sm:text-base">{current.title}</p>
                <p className="text-xs text-white/70">
                  {active + 1} / {modules.length}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 transition-colors hover:bg-white/25"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-surface shadow-2xl">
              <Image
                src={current.image}
                alt={current.alt}
                width={1400}
                height={1050}
                className="max-h-[75vh] w-full object-contain object-top"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={showPrev}
                className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/25"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
                Zurück
              </button>
              <button
                type="button"
                onClick={showNext}
                className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/25"
              >
                Weiter
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

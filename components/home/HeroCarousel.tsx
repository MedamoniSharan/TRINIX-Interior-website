"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { HeroSlide } from "@/lib/types";
import styles from "./HeroCarousel.module.css";

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[active];

  return (
    <section className={styles.hero} aria-label="Featured highlights">
      <div className={styles.slides}>
        {slides.map((s, i) => (
          <div
            key={s.headline}
            className={`${styles.slide} ${i === active ? styles.active : ""}`}
            aria-hidden={i !== active}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.image} alt="" className={styles.image} />
            <div className={styles.overlay} />
          </div>
        ))}
      </div>

      <div className={`container ${styles.content}`}>
        <h1>{slide.headline}</h1>
        <p>{slide.subtext}</p>
        <div className={styles.actions}>
          <Button href={slide.ctaHref} variant="primary">
            {slide.ctaLabel}
          </Button>
          <Button href="/services/" variant="outline">
            View Services
          </Button>
        </div>
      </div>

      {slides.length > 1 && (
        <div className={styles.dots} role="tablist" aria-label="Hero slides">
          {slides.map((s, i) => (
            <button
              key={s.headline}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to slide ${i + 1}`}
              className={i === active ? styles.dotActive : styles.dot}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

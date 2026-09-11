"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import type { PortfolioItem } from "@/lib/types";
import styles from "./PortfolioPreview.module.css";

export function PortfolioPreview({ items }: { items: PortfolioItem[] }) {
  return (
    <section id="portfolio" className={`section overflow-hidden ${styles.section}`}>
      <div className="container">
        <Reveal direction="up">
          <SectionHeading
            title="Get a glimpse of TRINEX projects"
            subtitle="Latest interior and commercial projects delivered the hassle-free way."
          />
        </Reveal>
        <Stagger className={styles.grid} stagger={0.09}>
          {items.map((item, index) => (
            <StaggerItem
              key={item.slug}
              as="article"
              className={styles.card}
              direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
            >
              <Parallax y={index % 2 === 0 ? 28 : 18} className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} />
              </Parallax>
              <div className={styles.meta}>
                <h3>{item.title}</h3>
                <p>{item.location}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal direction="up" delay={0.1} className={styles.cta}>
          <Button href="/contact/" variant="primary">
            Get Free Quote
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

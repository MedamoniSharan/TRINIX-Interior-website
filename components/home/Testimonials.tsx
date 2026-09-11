"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import type { Testimonial } from "@/lib/types";
import styles from "./Testimonials.module.css";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="section overflow-hidden">
      <div className="container">
        <Reveal direction="left">
          <SectionHeading title="Check out some of our customer reviews" />
        </Reveal>
        <Stagger className={styles.grid} stagger={0.12}>
          {items.map((item, index) => (
            <StaggerItem
              key={item.name}
              as="blockquote"
              className={styles.card}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <p>&ldquo;{item.quote}&rdquo;</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.location}</span>
              </footer>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

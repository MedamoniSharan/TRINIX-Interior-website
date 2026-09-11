"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Faq } from "@/lib/types";
import styles from "./FaqAccordion.module.css";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="FAQs About Home Interior Design" />
        <div className={styles.list}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{index + 1}. {item.question}</span>
                  <span className={styles.icon} aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className={styles.panel}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

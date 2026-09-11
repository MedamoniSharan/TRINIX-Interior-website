import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { EstimateCard } from "@/lib/types";
import styles from "./EstimateCards.module.css";

export function EstimateCards({ cards }: { cards: EstimateCard[] }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          title="Get the estimate for your project"
          subtitle="Calculate the approximate scope and request a consultation for your interior project."
        />
        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link href={card.href} className={styles.link}>
                Request Estimate →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

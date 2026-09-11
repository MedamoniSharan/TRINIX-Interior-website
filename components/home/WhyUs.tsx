import { SectionHeading } from "@/components/ui/SectionHeading";
import type { WhyUsItem } from "@/lib/types";
import styles from "./WhyUs.module.css";

export function WhyUs({ items }: { items: WhyUsItem[] }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Why choose TRINEX" />
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

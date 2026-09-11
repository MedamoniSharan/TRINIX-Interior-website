import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Capability } from "@/lib/types";
import styles from "./CapabilitiesStrip.module.css";

export function CapabilitiesStrip({ items }: { items: Capability[] }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading title="Our capabilities" />
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

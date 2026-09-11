import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Insight } from "@/lib/types";
import styles from "./InsightsStrip.module.css";

export function InsightsStrip({ items }: { items: Insight[] }) {
  return (
    <section id="insights" className="section">
      <div className="container">
        <SectionHeading
          title="Stay updated with interior design insights"
          subtitle="Expert tips on turnkey design, 3D visualization, and project planning from TRINEX."
        />
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.slug} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt="" />
              <div className={styles.body}>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <span className={styles.meta}>TRINEX Team | {item.date}</span>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link href="/about/">See more →</Link>
        </div>
      </div>
    </section>
  );
}

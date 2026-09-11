import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { PortfolioItem } from "@/lib/types";
import styles from "./PortfolioPreview.module.css";

export function PortfolioPreview({ items }: { items: PortfolioItem[] }) {
  return (
    <section id="portfolio" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          title="Get a glimpse of TRINEX projects"
          subtitle="Latest interior and commercial projects delivered the hassle-free way."
        />
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.slug} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.title} />
              <div className={styles.meta}>
                <h3>{item.title}</h3>
                <p>{item.location}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.cta}>
          <Button href="/contact/" variant="primary">
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

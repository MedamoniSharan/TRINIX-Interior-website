import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Offering } from "@/lib/types";
import styles from "./OfferingsGrid.module.css";

export function OfferingsGrid({ offerings }: { offerings: Offering[] }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="One-stop shop for all things interiors"
          subtitle="Be it turnkey execution, residential and commercial design, or modular solutions — we have it all for your home or office."
        />
        <div className={styles.grid}>
          {offerings.map((item) => (
            <Link key={item.slug} href={item.href} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className={styles.arrow} aria-hidden>
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { DesignCategory } from "@/lib/types";
import styles from "./DesignCategories.module.css";

export function DesignCategories({ categories }: { categories: DesignCategory[] }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          title="Inspiration for home interior designs"
          subtitle="Give your home a new look with these interior design categories curated for you."
        />
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/contact/?category=${cat.slug}`}
              className={styles.card}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cat.image} alt={cat.title} />
              <span className={styles.label}>{cat.title}</span>
            </Link>
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link href="/services/">View All Services →</Link>
        </div>
      </div>
    </section>
  );
}

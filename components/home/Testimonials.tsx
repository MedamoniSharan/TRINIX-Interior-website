import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/lib/types";
import styles from "./Testimonials.module.css";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Check out some of our customer reviews" />
        <div className={styles.grid}>
          {items.map((item) => (
            <blockquote key={item.name} className={styles.card}>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.location}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import styles from "./PromoBanner.module.css";

export function PromoBanner() {
  return (
    <section className={styles.banner} aria-label="Turnkey focus">
      <div className="container">
        <div className={styles.inner}>
          <div>
            <p className={styles.eyebrow}>Turnkey Interior Projects</p>
            <h2>Complete design-to-execution solutions</h2>
            <p>
              From concept development and 3D visualization to material selection,
              execution, finishing, and handover — coordinated under one team.
            </p>
          </div>
          <Link href="/contact/" className={styles.cta}>
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

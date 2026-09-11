import FooterSection5 from "@/components/ui/footer-section-5";
import { Button } from "@/components/ui/Button";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <div className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Your dream space starts with a consultation</h2>
              <p>Book a free consultation with TRINEX today.</p>
            </div>
            <Button href="/contact/" variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <FooterSection5 />
    </>
  );
}

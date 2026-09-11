"use client";

import FooterSection5 from "@/components/ui/footer-section-5";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <div className={styles.ctaBanner}>
        <div className="container">
          <Reveal direction="up" className={styles.ctaInner}>
            <div>
              <h2>Your dream space starts with a consultation</h2>
              <p>Book a free consultation with TRINEX today.</p>
            </div>
            <Reveal direction="right" delay={0.12}>
              <Button href="/contact/" variant="primary">
                Get Started
              </Button>
            </Reveal>
          </Reveal>
        </div>
      </div>
      <FooterSection5 />
    </>
  );
}

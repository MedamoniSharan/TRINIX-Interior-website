"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
  /** Pixel height of the mark; width follows aspect ratio. Overridden by --logo-h CSS var. */
  height?: number;
};

export function Logo({ className, height = 56 }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href="/"
      className={`${styles.logo}${className ? ` ${className}` : ""}`}
      aria-label="TRINEX by TRINATH DESIGN STUDIO home"
    >
      {!imgError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/trinex-logo-v2.png"
          alt="TRINEX by TRINATH DESIGN STUDIO"
          width={height}
          height={height}
          style={{ height: `var(--logo-h, ${height}px)`, width: "auto" }}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={styles.fallback}>
          <strong>TRINEX</strong>
          <small>by TRINATH DESIGN STUDIO</small>
        </span>
      )}
    </Link>
  );
}

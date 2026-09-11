"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
  /** Pixel height of the mark; width follows aspect ratio. */
  height?: number;
};

export function Logo({ className, height = 88 }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href="/"
      className={`${styles.logo}${className ? ` ${className}` : ""}`}
      aria-label="TRINEX home"
    >
      {!imgError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/trinex-logo-v2.png"
          alt="TRINEX by Trinath Design Studio"
          width={height}
          height={height}
          style={{ height, width: "auto" }}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={styles.fallback}>
          <strong>TRINEX</strong>
          <small>by Trinath Design Studio</small>
        </span>
      )}
    </Link>
  );
}

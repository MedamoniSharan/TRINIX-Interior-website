"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { CONTACT } from "@/lib/contact";
import { Parallax } from "@/components/motion/Reveal";

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export function InteriorAbout() {
  const reduced = useReducedMotion();

  return (
    <section className="interior-page" aria-labelledby="about-title" id="about">
      <style>{`
        .interior-page {
          --ink: #1a2332;
          --muted-ink: #6b7280;
          --paper: #f0f0f0;
          --line: rgba(26, 35, 50, 0.12);
          --accent: #c17f3a;
          --serif: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif;
          box-sizing: border-box;
          padding: 5.5rem 1.5rem 6rem;
          color: var(--ink);
          background:
            radial-gradient(ellipse 80% 50% at 10% 0%, rgba(193, 127, 58, 0.06), transparent 55%),
            radial-gradient(ellipse 60% 40% at 90% 100%, rgba(30, 58, 95, 0.05), transparent 50%),
            var(--paper);
          font-family: var(--font-helvetica), ui-sans-serif, system-ui, sans-serif;
          overflow: hidden;
        }
        .interior-page *, .interior-page *::before, .interior-page *::after { box-sizing: border-box; }
        .interior-shell { width: min(100%, 1304px); margin: 0 auto; }
        .interior-intro {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 3rem;
          align-items: stretch;
        }
        .interior-image-wrap {
          overflow: hidden;
          align-self: stretch;
          min-height: 100%;
          height: 100%;
          background: #e8ecf1;
          border-radius: 2px;
          box-shadow: 0 18px 48px rgba(26, 35, 50, 0.08);
        }
        .interior-image-wrap > div,
        .interior-image-wrap > div > div {
          height: 100%;
          min-height: 100%;
        }
        .interior-image-wrap img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 420px;
          object-fit: cover;
          object-position: center;
          transition: transform .9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .interior-image-wrap:hover img { transform: scale(1.04); }
        .interior-kicker {
          display: inline-flex;
          align-items: center;
          gap: .7rem;
          margin: 0 0 1.3rem;
          color: var(--muted-ink);
          font-size: .78rem;
          font-weight: 600;
          letter-spacing: .2em;
          line-height: 1.4;
          text-transform: uppercase;
        }
        .interior-kicker::before {
          content: '';
          display: block;
          width: 2.2rem;
          height: 1px;
          background: var(--accent);
        }
        .interior-title {
          max-width: 25rem;
          margin: 0;
          font-family: var(--serif);
          font-size: clamp(2.7rem, 4.1vw, 4.1rem);
          font-weight: 400;
          letter-spacing: -.055em;
          line-height: .99;
          text-transform: uppercase;
        }
        .interior-copy {
          max-width: 25rem;
          margin: 0 0 2rem;
          color: #3d4a5c;
          font-size: 1rem;
          line-height: 1.8;
        }
        .interior-signoff { text-align: right; }
        .interior-signoff img {
          display: inline-block;
          width: 9.4rem;
          margin: 0 0 .35rem;
          transition: transform .4s ease;
        }
        .interior-signoff a:hover img { transform: scale(1.03); }
        .interior-signoff h2 {
          margin: 0;
          max-width: 16rem;
          margin-left: auto;
          font-size: clamp(0.95rem, 2.4vw, 1.15rem);
          font-weight: 600;
          letter-spacing: .06em;
          line-height: 1.35;
          text-transform: uppercase;
        }
        @media (max-width: 820px) {
          .interior-page { padding: 4.5rem 1.25rem; }
          .interior-intro { grid-template-columns: 1fr 1fr; gap: 2.25rem; align-items: stretch; }
          .interior-image-wrap { grid-row: span 2; min-height: 100%; height: auto; }
          .interior-image-wrap img { min-height: 100%; height: 100%; }
          .interior-title { font-size: clamp(2.35rem, 7vw, 3.7rem); }
        }
        @media (max-width: 560px) {
          .interior-page { padding: 3.5rem 1.15rem 4rem; }
          .interior-intro { display: flex; flex-direction: column; align-items: stretch; gap: 2.4rem; }
          .interior-image-wrap { aspect-ratio: 4 / 3; order: 0; height: auto; min-height: 0; }
          .interior-image-wrap img { min-height: 0; height: 100%; }
          .interior-title-block { order: 1; }
          .interior-copy-block { order: 2; }
          .interior-title { max-width: none; font-size: clamp(2rem, 9vw, 3.25rem); line-height: 1.05; }
          .interior-copy { max-width: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .interior-image-wrap img,
          .interior-signoff img {
            transition: none !important;
          }
        }
      `}</style>

      <div className="interior-shell">
        <motion.div
          className="interior-intro"
          variants={reduced ? undefined : stagger}
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.figure className="interior-image-wrap" variants={fadeLeft}>
            <Parallax y={28} className="h-full min-h-full w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/featured/living.jpg"
                alt="Warmly lit contemporary interior with sculptural furniture"
              />
            </Parallax>
          </motion.figure>

          <motion.div className="interior-title-block" variants={fadeLeft}>
            <p className="interior-kicker">About us</p>
            <h2 className="interior-title" id="about-title">
              We&apos;re committed to turning your vision into reality
            </h2>
          </motion.div>

          <motion.div className="interior-copy-block" variants={fadeRight}>
            <p className="interior-copy">
              TRINEX creates spaces that are not only visually stunning but also
              functional and uniquely yours. From private residences to commercial
              interiors, our turnkey design services bring your vision to life with
              style, precision, and coordinated execution.
            </p>
            <div className="interior-signoff">
              <Link
                href="/about/"
                aria-label={`Learn more about ${CONTACT.tagline}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/trinex-logo-v2.png" alt={CONTACT.tagline} />
              </Link>
              <h2>{CONTACT.tagline}</h2>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

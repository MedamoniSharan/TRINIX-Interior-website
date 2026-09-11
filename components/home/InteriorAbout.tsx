"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";
import { CONTACT } from "@/lib/contact";
import { Parallax } from "@/components/motion/Reveal";

interface Stat {
  value: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  {
    value: 65250,
    label: "Design Hours Completed",
    suffix: "+",
  },
  {
    value: 23160,
    label: "Satisfied Clients",
    suffix: "+",
  },
  {
    value: 150,
    label: "Awards Winning",
    suffix: "+",
  },
  {
    value: 20,
    label: "Years of Design Experience",
    suffix: "+",
  },
];

function ScrollCounter({
  value,
  suffix = "+",
  progress,
}: {
  value: number;
  suffix?: string;
  progress: MotionValue<number>;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const raw = useTransform(progress, [0, 0.22, 0.55, 0.82, 1], [0, value, value, value, 0]);
  const sprung = useSpring(raw, { stiffness: 90, damping: 22, mass: 0.6 });

  useMotionValueEvent(sprung, "change", (latest) => {
    if (!ref.current) return;
    ref.current.textContent = Math.round(latest).toLocaleString();
  });

  useEffect(() => {
    if (!ref.current) return;
    ref.current.textContent = reduced ? value.toLocaleString() : "0";
  }, [value, reduced]);

  return (
    <span className="interior-stat-value">
      <span ref={ref}>0</span>
      <span className="interior-stat-suffix" aria-hidden="true">
        {suffix}
      </span>
    </span>
  );
}

function ScrollStat({
  stat,
  index,
  progress,
}: {
  stat: Stat;
  index: number;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();
  const fromX = index % 2 === 0 ? -28 : 28;
  const y = useTransform(
    progress,
    [0, 0.35, 0.7, 1],
    reduced ? [0, 0, 0, 0] : [48, 0, 0, -28],
  );
  const x = useTransform(
    progress,
    [0, 0.35, 0.7, 1],
    reduced ? [0, 0, 0, 0] : [fromX, 0, 0, fromX * -0.35],
  );
  const opacity = useTransform(
    progress,
    [0, 0.18, 0.72, 1],
    reduced ? [1, 1, 1, 1] : [0.15, 1, 1, 0.35],
  );
  const scale = useTransform(
    progress,
    [0, 0.35, 0.7, 1],
    reduced ? [1, 1, 1, 1] : [0.92, 1, 1, 0.97],
  );
  const bar = useTransform(
    progress,
    [0.2, 0.45, 0.75, 1],
    reduced ? [36, 36, 36, 36] : [0, 36, 36, 8],
  );

  return (
    <motion.a
      className="interior-stat"
      href="/about/"
      style={{ y, x, opacity, scale }}
      aria-label={`${stat.value.toLocaleString()}${stat.suffix} ${stat.label}`}
    >
      <ScrollCounter value={stat.value} suffix={stat.suffix} progress={progress} />
      <span className="interior-stat-label">{stat.label}</span>
      <motion.span
        className="interior-stat-bar interior-stat-bar--scroll"
        aria-hidden="true"
        style={{ width: bar }}
      />
    </motion.a>
  );
}

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
  const statsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });

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
          font-size: .8rem;
          font-weight: 600;
          letter-spacing: .18em;
          text-transform: uppercase;
        }
        .interior-rule {
          position: relative;
          height: 1px;
          margin: 5.5rem 0 3.4rem;
          background: linear-gradient(90deg, transparent, var(--line) 12%, var(--line) 88%, transparent);
        }
        .interior-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
        }
        .interior-stat {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 0.35rem 2rem 0.35rem 0;
          text-decoration: none;
          color: inherit;
          will-change: transform, opacity;
        }
        .interior-stat:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 12%;
          right: 0;
          bottom: 12%;
          width: 1px;
          background: var(--line);
        }
        .interior-stat:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 6px;
        }
        .interior-stat-value {
          display: inline-flex;
          align-items: flex-start;
          font-family: var(--serif);
          font-size: clamp(2.35rem, 3.4vw, 3.35rem);
          font-weight: 400;
          letter-spacing: -.04em;
          line-height: 0.95;
          color: var(--ink);
          font-variant-numeric: tabular-nums;
        }
        .interior-stat-suffix {
          margin-left: 0.12em;
          font-family: var(--font-helvetica), ui-sans-serif, system-ui, sans-serif;
          font-size: 0.58em;
          font-weight: 300;
          line-height: 1;
          color: var(--accent);
          transform: translateY(0.18em);
        }
        .interior-stat-label {
          max-width: 11rem;
          color: var(--muted-ink);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          line-height: 1.55;
          text-transform: uppercase;
        }
        .interior-stat-bar {
          height: 2px;
          margin-top: 0.15rem;
          background: var(--accent);
        }
        .interior-stat-bar--scroll {
          width: 0;
          display: block;
        }
        @media (max-width: 820px) {
          .interior-page { padding: 4.5rem 1.25rem; }
          .interior-intro { grid-template-columns: 1fr 1fr; gap: 2.25rem; align-items: stretch; }
          .interior-image-wrap { grid-row: span 2; min-height: 100%; height: auto; }
          .interior-image-wrap img { min-height: 100%; height: 100%; }
          .interior-title { font-size: clamp(2.35rem, 7vw, 3.7rem); }
          .interior-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 2.4rem; }
          .interior-stat { padding-right: 1.25rem; }
          .interior-stat:nth-child(2n)::after { display: none; }
          .interior-stat:nth-child(-n+2) { padding-bottom: 0.5rem; }
        }
        @media (max-width: 560px) {
          .interior-page { padding: 3.5rem 1.15rem 4rem; }
          .interior-intro { display: flex; flex-direction: column; align-items: stretch; gap: 2.4rem; }
          .interior-image-wrap { aspect-ratio: 4 / 3; order: 0; height: auto; min-height: 0; }
          .interior-image-wrap img { min-height: 0; height: 100%; }
          .interior-title-block { order: 1; }
          .interior-copy-block { order: 2; }
          .interior-title { max-width: none; font-size: clamp(2.55rem, 13vw, 4rem); }
          .interior-copy { max-width: none; }
          .interior-rule { margin: 3.8rem 0 2.3rem; }
          .interior-stats { gap: 0; }
          .interior-stat {
            padding: 1.35rem 1rem 1.35rem 0;
          }
          .interior-stat::after { display: none !important; }
          .interior-stat:nth-child(odd) {
            border-right: 1px solid var(--line);
          }
          .interior-stat:nth-child(-n+2) {
            border-bottom: 1px solid var(--line);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .interior-image-wrap img,
          .interior-signoff img {
            transition: none !important;
          }
          .interior-stat {
            will-change: auto;
          }
        }
      `}</style>

      <div className="interior-shell">
        <motion.div
          className="interior-intro"
          variants={reduced ? undefined : stagger}
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: true, amount: 0.25 }}
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
                <img src="/images/trinex-logo-v2.png" alt="TRINEX" />
              </Link>
              <h2>TRINEX</h2>
            </div>
          </motion.div>
        </motion.div>

        <div className="interior-rule" aria-hidden="true" />

        <div
          ref={statsRef}
          className="interior-stats"
          aria-label="Studio achievements"
        >
          {stats.map((stat, index) => (
            <ScrollStat
              key={stat.label}
              stat={stat}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

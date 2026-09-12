"use client";

import React, { useRef } from "react";
import { FlutedGlass } from "@paper-design/shaders-react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { CONTACT } from "@/lib/contact";
import { getCompany } from "@/lib/content";

const company = getCompany();
const companyName = company.shortName;
const companyFullName = company.name;

const iconClassName = "w-5 h-5";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

const TrinexLogo = ({ className }: { className?: string }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/trinex-logo-v2.png"
      alt={companyFullName}
      width={144}
      height={144}
      className={className}
    />
  );
};

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Architectural Services", href: "/services/architectural-services/" },
      { name: "Structural Design", href: "/services/structural-design-services/" },
      { name: "Residential Interiors", href: "/services/residential-interior-design-projects/" },
      { name: "Commercial Interiors", href: "/services/commercial-interiors-projects/" },
      { name: "Construction Activities", href: "/services/construction-activities/" },
      { name: "Turnkey Projects", href: "/services/turnkey-projects/" },
      { name: "Project Management", href: "/services/project-management-services/" },
      { name: "All Services", href: "/services/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about/" },
      { name: "Portfolio", href: "/#portfolio" },
      { name: "Contact", href: "/contact/" },
      { name: "Book Consultation", href: "/contact/" },
    ],
  },
];

const socialIcons = [
  { name: "Instagram", href: CONTACT.instagram, Icon: InstagramIcon },
  { name: "Facebook", href: CONTACT.facebook, Icon: FacebookIcon },
  { name: "LinkedIn", href: CONTACT.linkedin, Icon: LinkedInIcon },
  { name: "Email", href: `mailto:${CONTACT.email}`, Icon: MailIcon },
  { name: "Call", href: `tel:${CONTACT.phone}`, Icon: PhoneIcon },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const linkItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

export default function FooterSection5() {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start end", "end end"],
  });

  const wordmarkY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [80, -40],
  );
  const wordmarkOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1],
  );
  const wordmarkScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [1, 1] : [0.92, 1.04],
  );
  const panelY = useTransform(
    scrollYProgress,
    [0, 0.45],
    reduced ? [0, 0] : [64, 0],
  );
  const glassOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    reduced ? [1, 1, 1] : [0.35, 1, 1],
  );

  return (
    <footer
      ref={rootRef}
      className="w-full bg-white relative overflow-hidden antialiased [font-synthesis:none]"
    >
      {/* Animated dots strip — from MotionSites stark-minimal-footer */}
      <div
        className="footer-dots relative h-16 md:h-24 overflow-hidden bg-white"
        aria-hidden="true"
      >
        <div className="footer-dots__line absolute left-0 top-1/2 h-14 w-[200%] -translate-y-1/2 opacity-70" />
      </div>

      <style>{`
        .footer-dots__line {
          background-image:
            radial-gradient(circle, rgb(30 58 95 / 0.35) 1.5px, transparent 2px),
            radial-gradient(circle, rgb(193 127 58 / 0.28) 1px, transparent 1.5px),
            radial-gradient(circle, rgb(30 58 95 / 0.22) 1.2px, transparent 1.8px);
          background-position: 0 8px, 24px 22px, 48px 14px;
          background-size: 72px 38px, 110px 44px, 160px 52px;
          animation: footerDotsMove 18s linear infinite;
        }
        @keyframes footerDotsMove {
          from { transform: translate3d(0, -50%, 0); }
          to { transform: translate3d(-50%, -50%, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-dots__line { animation: none; }
        }
      `}</style>

      <div className="relative w-full flex justify-center items-end pt-16 md:pt-24 pb-0 z-0 overflow-hidden">
        <motion.h1
          style={{
            y: wordmarkY,
            opacity: wordmarkOpacity,
            scale: wordmarkScale,
            color: "#000000",
          }}
          className="text-[clamp(3.25rem,22vw,13.125rem)] font-bold leading-[0.75] select-none -mb-3 sm:-mb-4 md:-mb-6 will-change-transform"
        >
          {companyName}
        </motion.h1>
      </div>

      <motion.div
        style={{ y: panelY }}
        className="relative w-full [--color-primary:#1e3a5f] bg-(--color-primary) text-white z-10 min-h-[400px] will-change-transform"
      >
        <motion.div
          style={{ opacity: glassOpacity }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <FlutedGlass
            size={0.89}
            shape="lines"
            angle={0}
            distortionShape="prism"
            distortion={0.5}
            shift={0}
            blur={0}
            edges={0.25}
            stretch={0}
            scale={1.11}
            fit="cover"
            highlights={0.1}
            shadows={0.2}
            grainMixer={0.1}
            grainOverlay={0.1}
            colorBack="#00000000"
            colorHighlight="#FFFFFF"
            colorShadow="#000000"
            className="w-full h-full bg-transparent"
          />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col lg:flex-row justify-between gap-16 lg:gap-8"
          variants={reduced ? undefined : staggerParent}
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-col justify-between max-w-sm w-full"
            variants={fadeLeft}
          >
            <div className="flex flex-col">
              <motion.div
                variants={fadeUp}
                whileHover={reduced ? undefined : { scale: 1.04, rotate: -1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="w-fit"
              >
                <TrinexLogo className="w-36 h-36 shrink-0 mb-3 object-contain drop-shadow-md" />
              </motion.div>
              <p className="text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide text-white mb-3 leading-snug">
                {CONTACT.tagline}
              </p>
              <h2 className="text-xl md:text-[22px] font-medium leading-tight text-white">
                Design → Plan → Visualize
                <br />
                Execute → Finish → Handover
              </h2>
            </div>

            <div className="flex flex-col gap-3 mt-12 lg:mt-auto pt-8">
              <div className="flex items-center gap-4">
                {socialIcons.map(({ name, href, Icon }, i) =>
                  href ? (
                    <motion.div
                      key={name}
                      variants={linkItem}
                      custom={i}
                      whileHover={reduced ? undefined : { y: -3, scale: 1.1 }}
                    >
                      <Link
                        href={href}
                        aria-label={name}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="!text-white/80 hover:!text-white transition-colors inline-flex"
                        style={{ color: "rgba(255,255,255,0.8)" }}
                      >
                        <Icon className={iconClassName} />
                      </Link>
                    </motion.div>
                  ) : null,
                )}
              </div>
              <p className="font-light text-white/80 text-xs md:text-[13px] mt-1">
                © {new Date().getFullYear()} {companyFullName}. All rights reserved
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-12 md:gap-16 flex-wrap lg:flex-nowrap"
            variants={fadeRight}
          >
            {footerLinks.map((section) => (
              <motion.div
                key={section.title}
                className="flex flex-col gap-5"
                variants={staggerParent}
              >
                <motion.h3
                  className="font-semibold text-lg md:text-xl text-white"
                  variants={fadeUp}
                >
                  {section.title}
                </motion.h3>
                <ul className="flex flex-col gap-3 md:gap-4">
                  {section.links.map((link) => (
                    <motion.li key={link.name} variants={linkItem}>
                      <Link
                        href={link.href}
                        className="hover:!text-white transition-colors text-sm md:text-[15px] font-medium inline-block"
                        style={{ color: "rgba(255,255,255,0.8)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateX(4px)";
                          e.currentTarget.style.color = "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateX(0)";
                          e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                        }}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div className="flex flex-col gap-5 max-w-xs" variants={fadeUp}>
              <h3 className="font-semibold text-lg md:text-xl text-white">Contact</h3>
              <ul className="flex flex-col gap-3 md:gap-4 text-sm md:text-[15px] font-medium text-white/80">
                <motion.li variants={linkItem}>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="transition-colors"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </motion.li>
                <motion.li variants={linkItem}>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="transition-colors break-all"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {CONTACT.email}
                  </a>
                </motion.li>
                <motion.li variants={linkItem} className="leading-relaxed">
                  <a
                    href={CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {CONTACT.address}
                  </a>
                </motion.li>
                <motion.li variants={linkItem} className="leading-relaxed pt-1">
                  <span className="block">{CONTACT.hours.weekdays}</span>
                  <span className="block">{CONTACT.hours.saturday}</span>
                  <span className="block">{CONTACT.hours.sunday}</span>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

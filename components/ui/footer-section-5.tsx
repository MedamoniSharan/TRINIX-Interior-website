"use client";

import React from "react";
import { FlutedGlass } from "@paper-design/shaders-react";
import Link from "next/link";
import { CONTACT } from "@/lib/contact";

const companyName = "TRINEX";

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

const TrinexLogo = ({ className }: { className?: string }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/trinex-logo-v2.png"
      alt="TRINEX by Trinath Design Studio"
      width={120}
      height={120}
      className={className}
    />
  );
};

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Turnkey Interior Projects", href: "/services/turnkey-interior-projects/" },
      { name: "Residential Interiors", href: "/services/residential-interior-design/" },
      { name: "Commercial Projects", href: "/services/commercial-interior-projects/" },
      { name: "3D Visualization", href: "/services/3d-visualization/" },
      { name: "Modular Furniture", href: "/services/modular-custom-furniture/" },
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
  { name: "Email", href: `mailto:${CONTACT.email}`, Icon: MailIcon },
  { name: "Call", href: `tel:${CONTACT.phone}`, Icon: PhoneIcon },
];

export default function FooterSection5() {
  return (
    <footer className="w-full bg-white relative overflow-hidden antialiased [font-synthesis:none]">
      <div className="relative w-full flex justify-center items-end pt-24 md:pt-32 pb-0 z-0">
        <h1 className="text-[120px] sm:text-[160px] md:text-[210px] font-semibold text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.4)] leading-[0.75] select-none -mb-4 md:-mb-6 opacity-50">
          {companyName}
        </h1>
      </div>

      <div className="relative w-full [--color-primary:#1e3a5f] bg-(--color-primary) text-white z-10 min-h-[400px]">
        <div className="absolute inset-0 z-0 pointer-events-none">
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
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          <div className="flex flex-col justify-between max-w-sm w-full">
            <div className="flex flex-col">
              <TrinexLogo className="w-28 h-28 shrink-0 mb-3 object-contain drop-shadow-md" />
              <p className="text-sm text-white/80 mb-3">{CONTACT.tagline}</p>
              <h2 className="text-xl md:text-[22px] font-medium leading-tight text-white">
                Design → Plan → Visualize
                <br />
                Execute → Finish → Handover
              </h2>
            </div>

            <div className="flex flex-col gap-3 mt-12 lg:mt-auto pt-8">
              <div className="flex items-center gap-4">
                {socialIcons.map(({ name, href, Icon }) =>
                  href ? (
                    <Link
                      key={name}
                      href={href}
                      aria-label={name}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="!text-white/80 hover:!text-white transition-colors"
                    >
                      <Icon className={iconClassName} />
                    </Link>
                  ) : null,
                )}
              </div>
              <p className="font-light text-white/80 text-xs md:text-[13px] mt-1">
                © {new Date().getFullYear()} {companyName}, All rights reserved
              </p>
            </div>
          </div>

          <div className="flex gap-12 md:gap-16 flex-wrap lg:flex-nowrap">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-5">
                <h3 className="font-semibold text-lg md:text-xl text-white">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3 md:gap-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="!text-white/80 hover:!text-white transition-colors text-sm md:text-[15px] font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-5 max-w-xs">
              <h3 className="font-semibold text-lg md:text-xl text-white">Contact</h3>
              <ul className="flex flex-col gap-3 md:gap-4 text-sm md:text-[15px] font-medium text-white/80">
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="!text-white/80 hover:!text-white transition-colors"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="!text-white/80 hover:!text-white transition-colors break-all"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li className="leading-relaxed">{CONTACT.address}</li>
                <li className="leading-relaxed pt-1">
                  <span className="block">{CONTACT.hours.weekdays}</span>
                  <span className="block">{CONTACT.hours.saturday}</span>
                  <span className="block">{CONTACT.hours.sunday}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

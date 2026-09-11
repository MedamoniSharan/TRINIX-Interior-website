import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/contact";
import { getCompany, getServices } from "@/lib/content";
import styles from "../page-shell.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TRINEX by TRINATH DESIGN STUDIO — a Hyderabad-based turnkey interior and design consultancy delivering complete design-to-execution solutions.",
};

export default function AboutPage() {
  const company = getCompany();
  const services = getServices();

  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <header className={styles.header}>
          <h1>About {company.name}</h1>
          <p>
            {company.tagline} — complete design-to-execution solutions.
          </p>
        </header>

        <div className={styles.body}>
          {company.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}

          <SectionHeading title="Our Core Approach" />
          <p>
            <strong>{company.process}</strong>
          </p>
          <div className={styles.body}>
            <ul>
              {company.processSteps.map((p) => (
                <li key={p.step}>
                  <strong>{p.step}</strong> — {p.desc}
                </li>
              ))}
            </ul>
          </div>

          <h2>What We Offer</h2>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>{service.title}</li>
            ))}
          </ul>

          <h2>Visit Us</h2>
          <ul>
            <li>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <strong>Address:</strong>{" "}
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT.address}
              </a>
            </li>
            <li>
              <strong>Hours:</strong> {CONTACT.hours.weekdays};{" "}
              {CONTACT.hours.saturday}; {CONTACT.hours.sunday}
            </li>
          </ul>

          <div style={{ marginTop: 32 }}>
            <Button href="/contact/" variant="primary">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

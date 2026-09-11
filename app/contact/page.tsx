import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT, MAP_EMBED_SRC } from "@/lib/contact";
import shell from "../page-shell.module.css";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free consultation with TRINEX by TRINATH DESIGN STUDIO. Call 7659870346 or visit our studio in Vanasthalipuram, Hyderabad.",
};

export default function ContactPage() {
  return (
    <div className={`section ${shell.page}`}>
      <div className="container">
        <header className={shell.header}>
          <h1>Contact TRINEX</h1>
          <p>Book a free consultation for your interior or architectural project.</p>
        </header>

        <div className={styles.layout}>
          <aside className={styles.info}>
            <h2>Get in Touch</h2>
            <p className={styles.tagline}>{CONTACT.tagline}</p>
            <ul>
              <li>
                <strong>Phone</strong>
                <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <strong>Address</strong>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT.address}
                </a>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                >
                  Open in Google Maps →
                </a>
              </li>
            </ul>

            <h3>Business Hours</h3>
            <ul className={styles.hours}>
              <li>{CONTACT.hours.weekdays}</li>
              <li>{CONTACT.hours.saturday}</li>
              <li>{CONTACT.hours.sunday}</li>
            </ul>
          </aside>

          <div className={styles.formWrap}>
            <h2>Request a Consultation</h2>
            <Suspense fallback={<p>Loading form...</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

        <section className={styles.mapSection} aria-labelledby="location-heading">
          <div className={styles.mapHeader}>
            <h2 id="location-heading">Our Location</h2>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Get directions →
            </a>
          </div>
          <div className={styles.mapFrame}>
            <iframe
              title="TRINEX studio location on Google Maps"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT } from "@/lib/contact";
import shell from "../page-shell.module.css";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free consultation with TRINEX. Call 7659870346 or visit our studio in Vanasthalipuram, Hyderabad.",
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
                <span>{CONTACT.address}</span>
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
      </div>
    </div>
  );
}

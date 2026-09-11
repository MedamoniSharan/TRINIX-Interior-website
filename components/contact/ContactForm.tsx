"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import {
  buildConsultationMessage,
  CONTACT,
  getMailtoUrl,
  getWhatsAppUrl,
} from "@/lib/contact";
import styles from "./ContactForm.module.css";

const PROJECT_TYPES = [
  "Architectural Services",
  "Structural Design Services",
  "Residential Interior Design and Projects",
  "Commercial Interiors and Projects",
  "All Kinds of Construction Activities",
  "Turnkey Projects",
  "Project Management Services",
  "Other",
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") ?? "";
  const normalizedType =
    defaultType === "residential"
      ? "Residential Interior Design and Projects"
      : defaultType === "commercial"
        ? "Commercial Interiors and Projects"
        : defaultType === "turnkey"
          ? "Turnkey Projects"
          : defaultType === "architectural"
            ? "Architectural Services"
            : defaultType === "structural"
              ? "Structural Design Services"
              : defaultType === "construction"
                ? "All Kinds of Construction Activities"
                : defaultType === "management"
                  ? "Project Management Services"
                  : "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: normalizedType,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = buildConsultationMessage(form);
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <h2>Thank you!</h2>
        <p>
          Your consultation request has been prepared. WhatsApp should open with your
          message — if it didn&apos;t, you can also email us directly.
        </p>
        <div className={styles.successActions}>
          <Button
            href={getWhatsAppUrl(buildConsultationMessage(form))}
            variant="primary"
          >
            Open WhatsApp Again
          </Button>
          <Button
            href={getMailtoUrl(
              "TRINEX Consultation Request",
              buildConsultationMessage(form),
            )}
            variant="outline"
          >
            Send via Email
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">Phone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone number"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="projectType">Project Type *</label>
        <select
          id="projectType"
          name="projectType"
          required
          value={form.projectType}
          onChange={handleChange}
        >
          <option value="">Select project type</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project — location, scope, timeline..."
        />
      </div>

      <Button type="submit" variant="primary">
        Send via WhatsApp
      </Button>

      <p className={styles.note}>
        Or call us at{" "}
        <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a> or email{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </p>
    </form>
  );
}

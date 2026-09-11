import type { Metadata } from "next";
import Link from "next/link";
import { getServiceGroups } from "@/lib/content";
import styles from "./services.module.css";
import shell from "../page-shell.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore TRINEX services — architectural design, structural design, residential and commercial interiors, construction, turnkey projects, and project management.",
};

export default function ServicesPage() {
  const groups = getServiceGroups();

  return (
    <div className={`section ${shell.page}`}>
      <div className="container">
        <header className={shell.header}>
          <h1>Our Services</h1>
          <p>
            Complete design-to-execution solutions for residential and commercial
            projects in Hyderabad and beyond.
          </p>
        </header>

        <div className={styles.groups}>
          {groups.map((group) => (
            <section key={group.group} className={styles.group}>
              <h2>{group.group}</h2>
              <div className={styles.grid}>
                {group.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/`}
                    className={styles.card}
                  >
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span>Learn more →</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

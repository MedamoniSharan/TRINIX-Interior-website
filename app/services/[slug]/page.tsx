import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug, getServices } from "@/lib/content";
import shell from "../../page-shell.module.css";
import styles from "../service-detail.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className={`section ${shell.page}`}>
      <div className="container">
        <nav aria-label="Breadcrumb" className={shell.body}>
          <Link href="/services/">← All Services</Link>
        </nav>

        <div className={styles.hero}>
          {service.video ? (
            <video
              className={styles.media}
              autoPlay
              muted
              loop
              playsInline
              poster={service.image}
              aria-label={service.imageAlt}
            >
              <source src={service.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1100px"
              className={styles.image}
            />
          )}
        </div>

        <header className={shell.header}>
          <p className={styles.group}>{service.group}</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </header>

        <div className={shell.body}>
          <p>
            TRINEX provides professional {service.title.toLowerCase()} services as part
            of our complete design-to-execution approach. From initial consultation and
            planning through to on-site execution and handover, our team ensures
            coordinated delivery with transparent communication at every stage.
          </p>
          <p>
            Based in Hyderabad, we serve residential and commercial clients across
            Telangana. Whether you need standalone design support or full turnkey
            execution, TRINEX adapts to your project requirements.
          </p>

          <div className={styles.actions}>
            <Button href="/contact/" variant="primary">
              Request Consultation
            </Button>
            <Button href="/services/" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

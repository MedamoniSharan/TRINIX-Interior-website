import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`${styles.wrap} ${styles[align]}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}

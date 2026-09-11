import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const cls = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

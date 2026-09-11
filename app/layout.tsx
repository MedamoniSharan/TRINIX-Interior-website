import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TRINEX | Next-Gen 3D Architectural Studio",
    template: "%s | TRINEX",
  },
  description:
    "TRINEX is a professional turnkey interior & design consultancy in Hyderabad. Complete design-to-execution solutions for residential and commercial projects.",
  keywords: [
    "interior design Hyderabad",
    "turnkey interiors",
    "3D visualization",
    "TRINEX",
    "architectural design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

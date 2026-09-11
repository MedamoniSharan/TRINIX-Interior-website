import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TRINEX by TRINATH DESIGN STUDIO",
    template: "%s | TRINEX",
  },
  description:
    "TRINEX by TRINATH DESIGN STUDIO is a professional turnkey interior & design consultancy in Hyderabad. Complete design-to-execution solutions for residential and commercial projects.",
  keywords: [
    "interior design Hyderabad",
    "turnkey interiors",
    "3D visualization",
    "TRINEX",
    "TRINATH DESIGN STUDIO",
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

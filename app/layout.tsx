import type { Metadata } from "next";
import "./globals.css";
import "./rebrand.css";

export const metadata: Metadata = {
  title: {
    default: "David Schunk — Engineer, Writer, Builder",
    template: "%s | David Schunk",
  },
  description:
    "The personal site of David Schunk: IT engineer, writer, builder, host of Voice of Adoptees, and founder of the Russian Adoptees Organization.",
  metadataBase: new URL("https://www.davidschunk.com"),
  openGraph: {
    type: "website",
    title: "David Schunk — Engineer, Writer, Builder",
    description:
      "Technology, practical writing, adoptee advocacy, community work, research, and independent projects.",
    siteName: "David Schunk",
  },
  twitter: {
    card: "summary",
    title: "David Schunk — Engineer, Writer, Builder",
    description:
      "Technology, writing, adoptee advocacy, community work, research, and independent projects.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

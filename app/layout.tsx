import type { Metadata } from "next";
import "./globals.css";
import "./rebrand.css";

export const metadata: Metadata = {
  title: {
    default: "David Schunk | IT Engineer, Writer & Podcaster",
    template: "%s | David Schunk",
  },
  description:
    "David Schunk is an IT engineer in New Hampshire who writes about practical technology, hosts Voice of Adoptees, and builds independent projects.",
  metadataBase: new URL("https://www.davidschunk.com"),
  openGraph: {
    type: "website",
    title: "David Schunk | IT Engineer, Writer & Podcaster",
    description:
      "IT, practical technology writing, Voice of Adoptees, community work, research, and independent projects.",
    siteName: "David Schunk",
  },
  twitter: {
    card: "summary",
    title: "David Schunk | IT Engineer, Writer & Podcaster",
    description:
      "IT, technology writing, adoptee community work, research, and independent projects.",
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

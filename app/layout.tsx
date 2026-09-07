import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Schunk — Infrastructure, Systems & Useful Work",
  description:
    "David Schunk is an IT engineer and infrastructure builder focused on practical systems, automation, documentation, open-source tooling, and community.",
  metadataBase: new URL("https://www.davidschunk.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.davidschunk.com/",
    title: "David Schunk — Infrastructure, Systems & Useful Work",
    description:
      "Infrastructure, automation, documentation, open-source tooling, practical IT writing, and useful systems built for the people who have to operate them.",
    siteName: "David Schunk",
  },
  twitter: {
    card: "summary",
    title: "David Schunk — Infrastructure, Systems & Useful Work",
    description:
      "Infrastructure, automation, documentation, open-source tooling, and practical IT writing.",
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Schunk — Infrastructure, Systems & Useful Work",
  description:
    "David Schunk is an IT engineer and infrastructure builder focused on practical systems, automation, documentation, open-source tooling, and community.",
  metadataBase: new URL("https://www.davidschunk.com"),
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

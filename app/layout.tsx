import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Schunk — Systems, Stories & Useful Work",
  description:
    "The personal field manual of David Schunk: IT engineer, infrastructure builder, writer, gamer, podcaster, and Russian adoptee.",
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

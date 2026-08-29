import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Schunk — IT Engineer, Builder & Writer",
  description:
    "David Schunk builds understandable, operable, trustworthy infrastructure—and writes about the decisions behind it.",
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

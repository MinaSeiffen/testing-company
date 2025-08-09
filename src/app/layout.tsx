import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Company Portfolio",
  description: "Professional company portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

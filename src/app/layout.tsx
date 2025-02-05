import "./globals.css";

import * as React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import { layout } from "@/config";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: layout.metadata.title,
  description: layout.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>{children}</body>
    </html>
  );
}

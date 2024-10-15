"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";
import { UserProvider } from "@/lib/hooks/UserContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Drawn",
//   description: "Collaboration Web App",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    console.log("From layout")
  }, [])

  return (
    <html lang="en">
      <UserProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </UserProvider>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Idmasoft — Modern Software Products & Engineering",
    template: "%s | Idmasoft",
  },
  description:
    "Idmasoft builds modern software products, AI-powered solutions, backend systems, and enterprise applications that scale.",
  keywords: [
    "software company",
    "software development",
    "web applications",
    "AI integration",
    "backend systems",
    "enterprise software",
  ],
  authors: [{ name: "Idmasoft" }],
  creator: "Idmasoft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://idmasoft.com",
    siteName: "Idmasoft",
    title: "Idmasoft — Modern Software Products & Engineering",
    description:
      "Idmasoft builds modern software products, AI-powered solutions, backend systems, and enterprise applications that scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idmasoft — Modern Software Products & Engineering",
    description:
      "Idmasoft builds modern software products, AI-powered solutions, backend systems, and enterprise applications that scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

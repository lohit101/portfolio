import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteGrain } from "@/components/site-grain";
const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const accent = Cormorant_Garamond({
  weight: "500",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-accent",
});
export const metadata: Metadata = {
  title: "Lohit — Design, code & a little AI",
  description:
    "Designer and developer helping agencies deliver websites, apps, and digital experiences. Selected work and experiments by Lohit.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} ${accent.variable}`}>
        <noscript>
          <style>{`.hero{height:auto;min-height:100dvh;padding-bottom:40px}.hero-ink{min-height:100dvh}.hero-wordmark{position:relative;top:20px}.hero-copy{position:relative;padding-top:32dvh;left:auto;right:auto;bottom:auto;margin:0 5%}.hero-continuation{position:relative;left:auto;top:auto;transform:none;width:auto;max-width:900px;margin:25px auto 0}.white-bloom{display:none}`}</style>
        </noscript>
        {children}
        <SiteGrain />
      </body>
    </html>
  );
}

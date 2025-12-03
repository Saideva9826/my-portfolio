import "@/app/styles/globals.scss";
import { Metadata } from "next";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Saideva Goudnathi - Portfolio",
  description: "Full Stack Developer specializing in web applications",
  icons: {
    icon: {
      url: "/favicon.ico",
    },
    shortcut: { url: "/favicon.ico" },
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Saideva Goudnathi - Portfolio",
    description: "Full Stack Developer specializing in web applications",
    siteName: "Saideva's Portfolio",
    type: "website",
    locale: "en-US",
    url: "https://saideva.com",
  },
  twitter: {
    title: "Saideva Goudnathi - Portfolio",
    description: "Full Stack Developer specializing in web applications",
    card: "summary_large_image",
  },
};

export const viewport = {
  width: "device-width",
  minimumScale: 1,
  themeColor: "#1f1c17",
};

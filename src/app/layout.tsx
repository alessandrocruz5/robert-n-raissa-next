import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robert & Raissa",
  description:
    "Welcome to our wedding website. Join us in celebrating our special day!",
  metadataBase: new URL("https://robert-n-raissa.vercel.app"),
  openGraph: {
    title: "Robert & Raissa",
    description:
      "Welcome to our wedding website. Join us in celebrating our special day!",
    url: "https://robert-n-raissa.vercel.app",
    siteName: "Robert & Raissa Wedding",
    images: [
      {
        url: "/og-image.jpg", // This will be automatically converted to absolute URL
        width: 1200,
        height: 630,
        alt: "Robert and Raissa Wedding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert & Raissa",
    description:
      "Welcome to our wedding website. Join us in celebrating our special day!",
    images: ["/og-image.jpg"], // This will be automatically converted to absolute URL
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/og-image.jpg",
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

// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money For Robots",
  description:
    "Payment rails for AI agents. No onboarding. No KYC. Just code.",
  metadataBase: new URL("https://moneyforrobots.com"),
  openGraph: {
    title: "Money For Robots",
    description:
      "Payment rails for AI agents. No onboarding. No KYC. Just code.",
    url: "https://moneyforrobots.com",
    siteName: "Money For Robots",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Money For Robots",
    description:
      "Payment rails for AI agents. No onboarding. No KYC. Just code.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
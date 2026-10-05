import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Providers } from "./providers";

// Only the weights the design uses: 400 body, 600 semibold, 700 bold
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const siteTitle = "Kamsiyonna Obi | Full-Stack Developer Building Fintech";
const siteDescription =
  "Full-stack developer in Winnipeg, Canada building financial technology that gives people clarity, confidence, and control. C#/.NET, TypeScript, Angular, React.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamsiyonna.site"),
  title: {
    default: siteTitle,
    template: "%s | Kamsiyonna Obi",
  },
  description: siteDescription,
  keywords: [
    "Full-Stack Developer",
    "Software Developer",
    "Fintech",
    "Financial Technology",
    "C#",
    ".NET",
    "TypeScript",
    "Angular",
    "React",
    "Next.js",
    "Winnipeg",
    "Manitoba",
    "Canada",
  ],
  authors: [{ name: "Kamsiyonna Obi", url: "https://kamsiyonna.site" }],
  openGraph: {
    type: "website",
    siteName: "Kamsiyonna Obi",
    locale: "en_CA",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-Accent-light focus:px-5 focus:py-3 focus:text-white-900 dark:focus:bg-Accent-dark dark:focus:text-black-200"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

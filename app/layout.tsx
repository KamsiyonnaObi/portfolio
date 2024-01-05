import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kamsiyonna",
  description: "Portfolio site of a Software Engineer",
  keywords: [
    "Software Developer",
    "Software Developer in Canada",
    "NextJS",
    "React",
    "JavaScript",
    "Developer",
    "Canada",
    "Winnipeg",
    "Manitoba",
  ],
  openGraph: {
    images: [
      {
        url: "kamsiyonna.site/meta.png",
        width: 1200,
        height: 630,
        alt: "portfolio",
      },
    ],
  },
};

// export const metadata: Metadata = {
//   title: "Hipnode",
//   description: "Modern Social Media Forum Web App",
//   keywords: ["Next.js", "React", "JavaScript", "Developer"],
//   openGraph: {
//     images: [
//       {
//         url: ${baseURL}/meta.png,
//         width: 1200,
//         height: 630,
//         alt: "Hipnode",
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export const revalidate = 60;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kamsiyonna Obi",
  jobTitle: "Full-Stack Software Developer",
  url: "https://kamsiyonna.site",
  image: "https://kamsiyonna.site/kamsidev.png",
  sameAs: [
    "https://www.linkedin.com/in/kamsiyonna-obi-50a020167/",
    "https://github.com/KamsiyonnaObi",
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Winnipeg" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Winnipeg",
    addressRegion: "MB",
    addressCountry: "CA",
  },
  knowsAbout: [
    "Financial technology",
    "C#",
    ".NET",
    "TypeScript",
    "Angular",
    "React",
    "Next.js",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero */}
      <section className="px-6 py-12 bg-white-800 sm:py-[96px] lg:px-12 xl:px-[85px] dark:bg-black-300">
        <Hero />
      </section>
      {/* Selected work */}
      <section
        id="work"
        className="scroll-mt-16 px-6 py-12 bg-white-900 sm:px-[85px] sm:py-[72px] dark:bg-black-200"
      >
        <Projects />
      </section>
      {/* Experience */}
      <section
        id="experience"
        className="scroll-mt-16 px-6 py-12 bg-white-800 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-300"
      >
        <Experience />
      </section>
      {/* About */}
      <section
        id="about"
        className="scroll-mt-16 px-6 py-12 bg-white-900 lg:px-12 xl:px-[85px] sm:py-[72px] dark:bg-black-200"
      >
        <About />
      </section>
    </div>
  );
}

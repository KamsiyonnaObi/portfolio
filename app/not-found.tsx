import type { Metadata } from "next";
import Link from "next/link";

import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <NavigationBar />
      <main
        id="main"
        className="flex min-h-[60vh] flex-col items-center justify-center gap-5 bg-white-800 px-6 py-24 text-center dark:bg-black-300"
      >
        <p className="eyebrow">404</p>
        <h1 className="section-title">Page not found</h1>
        <p className="body-reg max-w-[480px] text-white-500 dark:text-white-800">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/projects" className="btn-secondary">
            Case studies
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

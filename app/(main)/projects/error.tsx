"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5 bg-white-800 px-6 py-24 text-center dark:bg-black-300">
      <h1 className="section-title">Something went wrong</h1>
      <p className="body-reg max-w-[480px] text-white-500 dark:text-white-800">
        This page could not be loaded. Please try again.
      </p>
      <div className="flex flex-col gap-3.5 sm:flex-row">
        <button type="button" className="btn-primary" onClick={reset}>
          Try again
        </button>
        <Link href="/projects" className="btn-secondary">
          All case studies
        </Link>
      </div>
    </div>
  );
}

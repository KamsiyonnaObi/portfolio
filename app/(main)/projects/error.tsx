"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Error() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-col text-black-300 dark:text-white-900 items-center justify-center h-screen bg-white-800 dark:bg-black-300">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-8">
        The page you are looking for does not exist.
      </p>
      <button
        className="bg-Accent-light dark:bg-Accent-dark text-white-900 px-4 py-2 rounded hover:bg-blue-600"
        onClick={goBack}
      >
        Go Back
      </button>
    </div>
  );
}

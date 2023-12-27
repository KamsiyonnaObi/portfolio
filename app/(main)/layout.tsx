import React from "react";

import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationBar />
      {children}

      <Footer />
    </>
  );
}

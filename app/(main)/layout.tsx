import React from "react";

import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationBar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

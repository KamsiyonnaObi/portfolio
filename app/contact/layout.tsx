import React from "react";

import NavigationBar from "@/components/NavigationBar";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationBar />
      <main id="main">{children}</main>
    </>
  );
}

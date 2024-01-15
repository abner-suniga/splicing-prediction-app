import React from "react";
import Header from "../ui/header";

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="px-32">{children}</main>
    </>
  );
}

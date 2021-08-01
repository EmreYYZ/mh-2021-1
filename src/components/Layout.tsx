import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-5/6 m-auto max-w-screen-md">
      <Header />

      {children}
      <Footer />
    </div>
  );
};

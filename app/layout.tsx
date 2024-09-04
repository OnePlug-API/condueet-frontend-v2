import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { PropsWithChildren, ReactNode } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Condueet",
  description: "Condueet | Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: PropsWithChildren<ReactNode>;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="app">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

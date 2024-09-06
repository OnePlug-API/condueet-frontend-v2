import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.scss";
import { PropsWithChildren, ReactNode } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import AOSinit from "@/lib/aos";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={`${lato.className} overflow-x-hidden bg-background`}>
        <AOSinit />
        <main className="app">
          <Header />
          <section>{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}

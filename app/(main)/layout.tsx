import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.scss";
import { PropsWithChildren, ReactNode } from "react";
import AOSinit from "@/lib/aos";
import Footer from "@/components/footer";
import NextjsTopLoader from "nextjs-toploader";
import Header from "@/components/header";

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
        <NextjsTopLoader color="#F26A52" />
        <main className="app">
          <Header />
          <section>{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}

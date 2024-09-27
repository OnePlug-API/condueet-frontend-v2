import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.scss";
import { PropsWithChildren, ReactNode } from "react";
import NextjsTopLoader from "nextjs-toploader";
import AOSinit from "@/lib/aos";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Condueet",
};

export default function RootLayout({
  children,
}: {
  children: PropsWithChildren<ReactNode>;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <AOSinit />
        <NextjsTopLoader color="#F26A52" />
        {children}
      </body>
    </html>
  );
}

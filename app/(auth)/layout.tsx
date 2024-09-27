import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.scss";
import { PropsWithChildren, ReactNode } from "react";
import NextjsTopLoader from "nextjs-toploader";
import AOSinit from "@/lib/aos";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Condueet",
  description: "Simplifying Finances for an Enjoyable Retirement",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Condueet",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 400,
        type: "image/png",
      },
    ],
  },
  robots: "INDEX, FOLLOW",
  metadataBase: new URL("https://condueet.onrender.com"),
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

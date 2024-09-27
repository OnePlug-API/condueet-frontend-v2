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
  title: "Condueet - Home",
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

import ProductsSolutions from "@/components/products/main";
import Hero from "@/components/shared/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condueet - Products",
};

export default function Page() {
  return (
    <section>
      <Hero largeText="Products and Solutions" />
      <ProductsSolutions />
    </section>
  );
}

import ProductsAndSolutions from "@/components/home/products-and-solutions";
import Hero from "@/components/shared/hero";

export default function Page() {
  return (
    <section>
      <Hero
        largeText="Seamlessly Connect to Secure Open Banking"
        smallText="Integrate users data across financial services using Condueet's
            Open Finance API into your application."
      />
      <ProductsAndSolutions />
    </section>
  );
}

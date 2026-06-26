import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/layout/CTASection";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the software products built by Idmasoft — from e-commerce automation to AI-powered business tools.",
  openGraph: {
    title: "Products | Idmasoft",
    description:
      "Explore the software products built by Idmasoft — from e-commerce automation to AI-powered business tools.",
    url: "https://idmasoft.com/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Products"
            title="Software we've built and ship"
            description="Each product solves a specific real-world problem. Built with modern technology, designed for reliability, and ready to scale."
          />
        </div>
      </div>

      {/* Product list */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a product idea?"
        description="We partner with businesses to design and build software products from the ground up."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}

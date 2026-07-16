import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/lib/constants/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeProductsSection() {
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-14">
          <SectionTitle
            eyebrow="Products"
            title="Software products we've built"
            description="Idmasoft ships products that solve real-world business problems. Each one is engineered to be reliable, scalable, and easy to adopt."
            titleClassName="text-zinc-50"
            descriptionClassName="text-zinc-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/products">|
            <Button
              className="border-zinc-800 text-zinc-50 hover:bg-zinc-900"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Product } from "@/lib/types";

const statusStyles: Record<Product["status"], string> = {
  Available:
    "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20",
  Beta: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20",
  "Coming Soon":
    "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-300",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 p-8 hover:-translate-y-0.5">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-sm">
        <span className="text-white text-lg font-bold">
          {product.name.charAt(0)}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[product.status]}`}
        >
          {product.status}
        </span>
      </div>

      <p className="text-sm font-medium text-blue-600 mb-3">
        {product.category}
      </p>
      <p className="text-slate-500 leading-relaxed flex-1 text-sm">
        {product.description}
      </p>

      <div className="mt-6 pt-6 border-t border-slate-100">
        <Link
          href={product.href}
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 gap-1.5 group/link"
        >
          Learn More
          <svg
            className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

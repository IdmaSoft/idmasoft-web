import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { Product } from "@/lib/types";

const statusStyles: Record<Product["status"], string> = {
  Available:
    "bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20",
  Beta: "bg-sky-500/10 text-sky-300 ring-1 ring-inset ring-sky-500/20",
  "Coming Soon":
    "bg-zinc-800 text-zinc-300 ring-1 ring-inset ring-zinc-700",
};

export function ProductCard({ product }: { product: Product }) {
  const t = useTranslations("common");

  return (
    <div className="group flex flex-col rounded-3xl border border-zinc-800 bg-zinc-950/80 shadow-sm transition-all duration-300 p-8 hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-sm">
        <span className="text-sky-300 text-lg font-bold">{product.name.charAt(0)}</span>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h3 className="text-xl font-semibold text-zinc-50">{product.name}</h3>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[product.status]}`}
        >
          {t(`productStatus.${product.status}`)}
        </span>
      </div>

      <p className="text-sm font-medium text-sky-300 mb-3">{product.category}</p>
      <p className="text-zinc-400 leading-relaxed flex-1 text-sm">
        {product.description}
      </p>

      <div className="mt-6 pt-6 border-t border-zinc-800">
        <Link
          href={product.href}
          className="inline-flex items-center text-sm font-semibold text-sky-300 hover:text-zinc-50 gap-1.5 group/link"
        >
          {t("learnMore")}
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

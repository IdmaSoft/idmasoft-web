import Link from "next/link";
import { ArrowRight, ShoppingBag, Bot, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FeaturedProductSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <span className="inline-flex items-center text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">
              Featured Product
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
              SellerResponder
            </h2>
            <p className="mt-2 text-lg font-medium text-orange-400">
              E-commerce Automation
            </p>
            <p className="mt-5 text-slate-400 text-lg leading-relaxed">
              An AI-powered platform that automates seller communication on
              e-commerce marketplaces. Handle buyer questions, feedback, and
              messages at scale — without the manual effort.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Automated responses powered by AI",
                "Available on multiple marketplaces",
                "Android app available on Google Play",
                "Saves hours of manual work weekly",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                href="/products/sellerresponder"
                size="md"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                View Product
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button
                href="/products"
                size="md"
                className="border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white bg-transparent"
              >
                All Products
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: <ShoppingBag className="w-5 h-5" aria-hidden="true" />,
                label: "Marketplace Integration",
                detail: "Connect your seller accounts",
                color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
              },
              {
                icon: <Bot className="w-5 h-5" aria-hidden="true" />,
                label: "AI Response Engine",
                detail: "Generate accurate, on-brand replies",
                color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
              },
              {
                icon: <Smartphone className="w-5 h-5" aria-hidden="true" />,
                label: "Mobile App",
                detail: "Manage from anywhere on Android",
                color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border ${card.color}`}
                >
                  {card.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {card.label}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{card.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

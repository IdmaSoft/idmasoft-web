import { ArrowRight, ShoppingBag, Bot, Smartphone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const highlights = [
  {
    icon: <ShoppingBag className="w-5 h-5" aria-hidden="true" />,
    label: "Marketplace Integration",
    detail: "Connect your seller accounts",
    color: "text-blue-400",
  },
  {
    icon: <Bot className="w-5 h-5" aria-hidden="true" />,
    label: "AI Response Engine",
    detail: "Generate accurate, on-brand replies",
    color: "text-orange-400",
  },
  {
    icon: <Smartphone className="w-5 h-5" aria-hidden="true" />,
    label: "Mobile App",
    detail: "Manage from anywhere on Android",
    color: "text-emerald-400",
  },
];

export function FeaturedProductSection() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
              Featured Product
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl leading-tight">
              SellerResponder
            </h2>
            <p className="mt-2 text-lg font-medium text-orange-400">
              E-commerce Automation
            </p>
            <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
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
                <li key={point} className="flex items-center gap-3 text-zinc-300 text-sm">
                  <Check className="w-4 h-4 text-zinc-500 flex-shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                render={<Link href="/products/sellerresponder" />}
                nativeButton={false}
                className="bg-orange-600 text-white hover:bg-orange-500 transition-colors"
              >
                View Product
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button
                render={<Link href="/products" />}
                nativeButton={false}
                  variant="default"
                  className="border-zinc-800 text-zinc-100 hover:border-zinc-700"
              >
                All Products
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="flex flex-col gap-5">
            {highlights.map((card) => (
              <Card
                key={card.label}
                className="hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors duration-300"
              >
                <CardHeader className="flex items-center gap-5 p-5">
                  <div className={`w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center ${card.color}`}>
                    {card.icon}
                  </div>
                  <div>
                    <CardTitle className="text-zinc-50 text-sm font-semibold">
                      {card.label}
                    </CardTitle>
                    <CardDescription className="text-zinc-400 text-xs mt-1">
                      {card.detail}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

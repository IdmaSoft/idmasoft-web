import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Smartphone,
  Bot,
  ShoppingBag,
  Clock,
  Star,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SellerResponder",
  description:
    "SellerResponder is an AI-powered platform that automates seller communication on e-commerce marketplaces. Save time, improve response rates, and scale your seller operations.",
  openGraph: {
    title: "SellerResponder | Idmasoft",
    description:
      "SellerResponder is an AI-powered platform that automates seller communication on e-commerce marketplaces.",
    url: "https://idmasoft.com/products/sellerresponder",
  },
};

const platforms = ["Marketplace A", "Marketplace B", "Marketplace C"];

const techStack = [
  "React Native",
  "NestJS",
  "PostgreSQL",
  "Azure",
  "OpenAI API",
  "Docker",
];

export default function SellerResponderPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-28 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-orange-400 uppercase bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full mb-6">
                <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
                E-commerce Automation
              </span>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
                SellerResponder
              </h1>
              <p className="mt-5 text-xl text-slate-400 leading-relaxed">
                Automate your marketplace communication. AI-powered responses
                that sound human, delivered at scale.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  render={<Link href="https://sellerresponder.com" />}
                  nativeButton={false}
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600"
                >
                  Visit Landing Page
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </Button>
                <Button
                  render={<Link href="https://play.google.com" />}
                  nativeButton={false}
                  size="lg"
                  className="border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white bg-transparent"
                >
                  <Smartphone className="w-4 h-4" aria-hidden="true" />
                  Google Play
                </Button>
              </div>
            </div>

            {/* Status card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 w-full max-w-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-400">Status</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-400">Category</span>
                  <span className="text-sm text-white">E-commerce Automation</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-400">Platform</span>
                  <span className="text-sm text-white">Web + Android</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-400">Developer</span>
                  <span className="text-sm text-white">Idmasoft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Problem */}
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-red-500" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">The Problem</h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                E-commerce sellers spend hours every day manually responding to
                buyer questions, negative feedback, and support requests across
                marketplaces. This takes time away from growing the business and
                causes inconsistent, delayed responses that hurt seller ratings.
              </p>
            </div>

            {/* Solution */}
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <Bot className="w-5 h-5 text-blue-600" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">The Solution</h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                SellerResponder uses AI to generate accurate, on-brand responses
                to common buyer interactions. Sellers review, customize, and
                send with a single tap — cutting response time from hours to
                seconds while maintaining a personal, professional tone.
              </p>
            </div>

            {/* Result */}
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-emerald-600" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">The Result</h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                Sellers get their time back. Buyers receive faster, higher
                quality responses. Marketplace ratings improve. The product
                handles the repetitive communication work so sellers can focus
                on inventory, pricing, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              What SellerResponder does
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "AI-generated response suggestions based on message context",
              "One-tap send workflow for fast response times",
              "Support for multiple marketplace accounts",
              "Response history and analytics",
              "Android mobile app for managing on the go",
              "Customizable response templates and tone settings",
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle
                  className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-slate-600 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Tech stack */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Technology
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                SellerResponder is built on a modern, scalable stack. The mobile
                app is built with React Native for cross-platform support. The
                backend runs on NestJS with PostgreSQL, deployed on Azure with
                full CI/CD automation.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Platforms
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                SellerResponder integrates with the major e-commerce
                marketplaces where sellers operate. Additional marketplace
                integrations are added based on user demand.
              </p>
              <ul className="space-y-3">
                {platforms.map((platform) => (
                  <li key={platform} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-sm text-slate-600">{platform}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to save hours every week?
          </h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Visit the SellerResponder landing page to learn more and get
            started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              render={<Link href="https://sellerresponder.com" />}
              nativeButton={false}
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50"
            >
              Visit Landing Page
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              render={<Link href="https://play.google.com" />}
              nativeButton={false}
              size="lg"
              className="bg-orange-600 text-white hover:bg-orange-700 border border-orange-400"
            >
              <Smartphone className="w-4 h-4" aria-hidden="true" />
              Download on Google Play
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

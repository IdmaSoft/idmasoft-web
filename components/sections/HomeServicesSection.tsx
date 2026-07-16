import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants/services";
import { Layers, Server, Plug, Cloud, Cpu, RefreshCw } from "lucide-react";

const featured = SERVICES.slice(0, 6);

export function HomeServicesSection() {
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-14">
          <SectionTitle
            eyebrow="Services"
            title="How we work with clients"
            description="From greenfield projects to system modernization, we bring the technical depth to move fast and build things right."
            titleClassName="text-zinc-50"
            descriptionClassName="text-zinc-400"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[minmax(0,_1.6fr)_minmax(0,_1fr)] xl:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <Card className="order-1 row-span-2 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
            <CardHeader>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-zinc-800 text-sky-300">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </div>
              <CardTitle>Full Stack Development</CardTitle>
              <CardDescription>
                End-to-end web and mobile applications built with modern frameworks, clean architecture, and scalable patterns.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="order-3 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
            <CardHeader>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-zinc-800 text-violet-300">
                <Server className="h-5 w-5" aria-hidden="true" />
              </div>
              <CardTitle>Backend Architecture</CardTitle>
              <CardDescription>
                Robust server-side systems designed for performance, reliability, and long-term maintainability.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="order-2 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
            <CardHeader>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-zinc-800 text-emerald-300">
                <Plug className="h-5 w-5" aria-hidden="true" />
              </div>
              <CardTitle>API Development</CardTitle>
              <CardDescription>
                RESTful and GraphQL APIs built with strong typing, proper documentation, and security best practices.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="order-4 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
            <CardHeader>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-zinc-800 text-sky-300">
                <Cloud className="h-5 w-5" aria-hidden="true" />
              </div>
              <CardTitle>Cloud Deployment</CardTitle>
              <CardDescription>
                Infrastructure setup and cloud deployment on AWS and Azure with CI/CD pipelines and monitoring.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="order-5 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
            <CardHeader>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-zinc-800 text-rose-300">
                <Cpu className="h-5 w-5" aria-hidden="true" />
              </div>
              <CardTitle>AI Integration</CardTitle>
              <CardDescription>
                Integration of AI and machine learning capabilities into existing products and business workflows.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="order-6 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
            <CardHeader>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-zinc-800 text-violet-300">
                <RefreshCw className="h-5 w-5" aria-hidden="true" />
              </div>
              <CardTitle>System Modernization</CardTitle>
              <CardDescription>
                Migration and modernization of legacy systems to current technology stacks without disrupting operations.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline" size="md" className="text-zinc-50 border-zinc-800 hover:bg-zinc-900">
            See All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

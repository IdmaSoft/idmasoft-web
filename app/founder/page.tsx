import type { Metadata } from "next";
import { Code2, Server, Cloud, BrainCircuit } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { CTASection } from "@/components/layout/CTASection";
import { SITE } from "@/lib/constants/site";
import type { Technology } from "@/lib/types";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Meet the founder of Idmasoft — a software engineer focused on clean architecture, scalable systems, and building software that lasts.",
  openGraph: {
    title: "Founder | Idmasoft",
    description:
      "Meet the founder of Idmasoft — a software engineer focused on clean architecture, scalable systems, and building software that lasts.",
    url: "https://idmasoft.com/founder",
  },
};

const expertise = [
  {
    icon: <Code2 className="w-5 h-5" aria-hidden="true" />,
    title: "Full Stack Engineering",
    description:
      "Deep experience building end-to-end applications — from database schema design to frontend component architecture.",
  },
  {
    icon: <Server className="w-5 h-5" aria-hidden="true" />,
    title: "Backend Architecture",
    description:
      "Designing scalable APIs, event-driven systems, and data pipelines that handle real-world production load.",
  },
  {
    icon: <Cloud className="w-5 h-5" aria-hidden="true" />,
    title: "Cloud & DevOps",
    description:
      "Production deployments on Azure and AWS. Container orchestration, CI/CD pipelines, and infrastructure automation.",
  },
  {
    icon: <BrainCircuit className="w-5 h-5" aria-hidden="true" />,
    title: "AI Integration",
    description:
      "Practical integration of AI capabilities into software products — from language models to intelligent automation workflows.",
  },
];

const coreSkills: Technology[] = [
  { name: "TypeScript", category: "Frontend" },
  { name: "React / Next.js", category: "Frontend" },
  { name: "NestJS", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "SQL Server", category: "Database" },
  { name: "Azure", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
];

const timeline = [
  {
    period: "Present",
    role: "Founder & Lead Engineer",
    org: "Idmasoft",
    description:
      "Building Idmasoft's product portfolio and delivering software engineering services to clients across different industries.",
  },
  {
    period: "Previous",
    role: "Senior Software Engineer",
    org: "Enterprise Software",
    description:
      "Designed and implemented backend systems, REST APIs, and business applications for large-scale enterprise environments.",
  },
  {
    period: "Earlier",
    role: "Full Stack Developer",
    org: "Product Companies",
    description:
      "Built web applications and internal tools across the full stack. Worked closely with product teams to ship features quickly without sacrificing quality.",
  },
];

const featuredProjects = [
  {
    name: "SellerResponder",
    description:
      "AI-powered e-commerce automation platform. Built the full product from architecture to production deployment on Azure.",
    status: "Live",
    statusColor: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20",
  },
  {
    name: "Enterprise Business Platform",
    description:
      "Large-scale business management system with complex reporting, multi-tenant architecture, and SQL Server integration.",
    status: "Delivered",
    statusColor: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20",
  },
];

export default function FounderPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="flex flex-col items-center lg:items-start gap-5">
              <div className="relative">
                <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-lg">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">F</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold text-slate-900">
                  Founder
                </h1>
                <p className="text-slate-500 text-sm mt-1">
                  Founder & Lead Engineer
                </p>
                <p className="text-blue-600 text-sm font-medium">Idmasoft</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 bg-white border border-slate-200 hover:border-blue-300 px-4 py-2 rounded-xl transition-colors"
                  aria-label="GitHub profile"
                >
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 bg-white border border-slate-200 hover:border-blue-300 px-4 py-2 rounded-xl transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <span className="inline-flex items-center text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-5">
                About the Founder
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                Engineering-first,
                <br />
                business-minded
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Idmasoft was founded by a software engineer with experience
                  building systems across industries — from enterprise business
                  platforms to consumer mobile applications. The company exists
                  because of a belief that great software requires both technical
                  depth and a clear understanding of the problem being solved.
                </p>
                <p>
                  The founder brings hands-on involvement to every project — not
                  as a manager who delegates, but as an engineer who architects,
                  codes, reviews, and ships. This means clients get direct access
                  to the person making technical decisions, not a layer of
                  abstraction.
                </p>
                <p>
                  Outside of client work, the founder builds Idmasoft's own
                  products — starting with SellerResponder. The goal is to build
                  a portfolio of software tools that solve specific, well-defined
                  problems and can operate independently at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Expertise */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {coreSkills.map((skill) => (
              <TechnologyBadge key={skill.name} technology={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">
            Career Timeline
          </h2>
          <div className="relative">
            <div
              className="absolute left-5 top-0 bottom-0 w-px bg-slate-200"
              aria-hidden="true"
            />
            <ol className="space-y-10">
              {timeline.map((entry, index) => (
                <li key={index} className="relative flex gap-8 pl-14">
                  <div
                    className="absolute left-0 top-1 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-sm z-10"
                    aria-hidden="true"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {entry.period}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900">
                      {entry.role}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 mb-2">
                      {entry.org}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-lg">
                      {entry.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.name}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-900">{project.name}</h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Work directly with the founder"
        description="All client engagements involve direct communication and technical involvement from the founder."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}

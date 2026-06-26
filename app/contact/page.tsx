import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { ContactForm } from "./ContactForm";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Idmasoft. Whether you have a project in mind or just want to explore possibilities, we'd love to hear from you.",
  openGraph: {
    title: "Contact | Idmasoft",
    description:
      "Get in touch with Idmasoft. Whether you have a project in mind or just want to explore possibilities, we'd love to hear from you.",
    url: "https://idmasoft.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-5">
            Contact
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
            Let's talk
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Whether you have a project in mind, want to discuss a technical
            challenge, or just want to explore what's possible — reach out.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-5">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group"
                    aria-label={`Email ${SITE.email}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">
                        Email
                      </p>
                      <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        {SITE.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">
                        Location
                      </p>
                      <p className="text-sm font-medium text-slate-900">
                        {SITE.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-5">
                  Social
                </h2>
                <div className="flex flex-col gap-3">
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group"
                    aria-label="GitHub profile"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 flex-shrink-0">
                      <GitHubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">
                        GitHub
                      </p>
                      <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        github.com/idmasoft
                      </p>
                    </div>
                  </a>

                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group"
                    aria-label="LinkedIn profile"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">
                        LinkedIn
                      </p>
                      <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        linkedin.com/company/idmasoft
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response note */}
              <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl">
                <p className="text-sm text-blue-800 leading-relaxed">
                  <span className="font-semibold">Response time:</span> We
                  typically respond within one business day. For urgent
                  matters, email directly.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-7">
                Send a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

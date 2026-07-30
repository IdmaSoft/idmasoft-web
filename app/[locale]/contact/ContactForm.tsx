"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // UI-only — no backend required per spec
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-emerald-400" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-zinc-50">{t("successTitle")}</h3>
        <p className="text-zinc-400 max-w-xs text-sm">
          {t("successDescription")}
        </p>
        <button
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-2 text-sm font-medium text-sky-400 hover:text-sky-300 underline underline-offset-2"
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-300 mb-1.5"
          >
            {t("nameLabel")} <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t("namePlaceholder")}
            className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-50 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-300 mb-1.5"
          >
            {t("emailLabel")} <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t("emailPlaceholder")}
            className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-50 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-zinc-300 mb-1.5"
        >
          {t("subjectLabel")} <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
        >
          <option value="" disabled>
            {t("subjectPlaceholder")}
          </option>
          <option value="project">{t("subjectOptions.project")}</option>
          <option value="consulting">{t("subjectOptions.consulting")}</option>
          <option value="product">{t("subjectOptions.product")}</option>
          <option value="other">{t("subjectOptions.other")}</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-300 mb-1.5"
        >
          {t("messageLabel")} <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder={t("messagePlaceholder")}
          className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-50 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        variant="default"
        className="w-full sm:w-auto bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors"
      >
        {t("submit")}
        <Send className="w-4 h-4" aria-hidden="true" />
      </Button>
    </form>
  );
}

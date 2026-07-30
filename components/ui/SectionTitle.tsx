interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionTitleProps) {
  const alignClasses =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className={`inline-flex items-center text-xs font-semibold tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full w-fit ${eyebrowClassName}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl leading-tight ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-lg text-zinc-400 leading-relaxed ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
}

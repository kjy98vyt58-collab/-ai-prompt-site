export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow ? <div className="mb-2 text-sm font-semibold text-brand-700">{eyebrow}</div> : null}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}


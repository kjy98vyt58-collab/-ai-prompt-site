import Link from "next/link";

import type { PromptItem } from "@/lib/prompts";

export function PromptCard({ prompt }: { prompt: PromptItem }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:border-brand-200">
      <div className="mb-3 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-brand-50 px-2.5 py-1 font-medium text-brand-700">
          {prompt.category.name}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{prompt.difficulty}</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{prompt.model}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">
        <Link href={`/prompt/${prompt.slug}`} className="hover:text-brand-700">
          {prompt.title}
        </Link>
      </h3>
      <p className="mb-4 text-sm leading-6 text-slate-600">{prompt.summary}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {prompt.tags.slice(0, 4).map((tag) => (
          <Link
            key={tag}
            href={`/search?q=${encodeURIComponent(tag)}`}
            className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-500 hover:border-brand-200 hover:text-brand-700"
          >
            #{tag}
          </Link>
        ))}
      </div>
      <Link href={`/prompt/${prompt.slug}`} className="text-sm font-semibold text-brand-700">
        查看完整提示词
      </Link>
    </article>
  );
}

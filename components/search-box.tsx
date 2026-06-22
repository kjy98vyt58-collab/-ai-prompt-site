"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type SearchBoxProps = {
  placeholder?: string;
  initialKeyword?: string;
};

export function SearchBox({
  placeholder = "搜索提示词、场景、标签",
  initialKeyword = "",
}: SearchBoxProps) {
  const router = useRouter();
  const [keyword, setKeyword] = useState(initialKeyword);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = keyword.trim();
    router.push(value ? `/search?q=${encodeURIComponent(value)}` : "/search");
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        className="h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-base outline-none ring-0 transition focus:border-brand-500"
        placeholder={placeholder}
        aria-label="搜索提示词"
      />
      <button
        type="submit"
        className="h-12 rounded-xl bg-brand-600 px-6 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        立即搜索
      </button>
    </form>
  );
}

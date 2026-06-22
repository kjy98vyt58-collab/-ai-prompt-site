import Link from "next/link";

import { PromptCard } from "@/components/prompt-card";
import { SearchBox } from "@/components/search-box";
import { SectionHeading } from "@/components/section-heading";
import { getHotTags, getLatestPrompts, getPopularPrompts } from "@/lib/prompts";
import { categories, siteConfig } from "@/lib/site";

export default function HomePage() {
  const latestPrompts = getLatestPrompts(8);
  const popularPrompts = getPopularPrompts(8);
  const hotTags = getHotTags(20);

  return (
    <main>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-soft">
              百度 SEO 优先 / 手机优先 / 可规模化扩展
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">{siteConfig.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{siteConfig.subtitle}</p>
            <div className="mt-8 max-w-3xl">
              <SearchBox />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["100", "高质量提示词"],
                ["10", "站点分类"],
                ["3", "主流模型覆盖"],
                ["SEO", "百度收录友好"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/70 bg-white p-4 shadow-soft">
                  <div className="text-2xl font-bold text-slate-900">{value}</div>
                  <div className="mt-1 text-sm text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="分类导航"
          title="按场景快速找到可直接使用的中文提示词"
          description="当前 MVP 已上线 10 个站点分类，其中 5 个核心分类已落地首批 100 篇提示词页面，适合从百度自然搜索流量切入。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:border-brand-200"
            >
              <div className="text-lg font-semibold text-slate-900">{category.name}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="热门提示词" title="高搜索意图页面" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {popularPrompts.map((prompt) => (
            <PromptCard key={prompt.slug} prompt={prompt} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="最新提示词" title="最新收录内容" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {latestPrompts.map((prompt) => (
            <PromptCard key={prompt.slug} prompt={prompt} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="推荐内容"
          title="围绕提示词库的第二阶段与第三阶段扩展"
          description="首页预留了后续商业化与平台化扩展方向，便于之后接入会员、收藏、工作流和 Agent 生态。"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["AI 工作流库", "聚合可复制的工作流模板，适合企业场景转化。"],
            ["付费提示词专区", "支持会员权限、收藏夹、购买与授权分层。"],
            ["AI Agent Skills", "接入 Agent、MCP 资源库和技能商店，形成长期增长结构。"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="text-lg font-semibold text-slate-900">{title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="热门标签" title="高频检索关键词" />
        <div className="flex flex-wrap gap-3">
          {hotTags.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/search?q=${encodeURIComponent(tag)}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-soft hover:border-brand-200 hover:text-brand-700"
            >
              #{tag} <span className="text-slate-400">({count})</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

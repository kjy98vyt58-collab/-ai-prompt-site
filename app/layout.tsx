import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/schema";
import { categories, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = buildOrganizationSchema();
  const websiteSchema = buildWebsiteSchema();

  return (
    <html lang="zh-CN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <div>
              <Link href="/" className="text-lg font-bold text-slate-900">
                {siteConfig.name}
              </Link>
              <p className="mt-1 text-xs text-slate-500">中国最大的 AI 提示词库与 AI 工作流平台</p>
            </div>
            <nav className="hidden flex-wrap gap-4 text-sm text-slate-600 md:flex">
              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`} className="hover:text-brand-700">
                  {category.name}
                </Link>
              ))}
              <Link href="/search" className="hover:text-brand-700">
                站内搜索
              </Link>
            </nav>
          </div>
        </div>
        {children}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[2fr,1fr,1fr] lg:px-8">
            <div>
              <div className="text-base font-semibold text-slate-900">{siteConfig.name}</div>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">{siteConfig.description}</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">核心分类</div>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                {categories.map((category) => (
                  <div key={category.slug}>
                    <Link href={`/category/${category.slug}`} className="hover:text-brand-700">
                      {category.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">平台能力</div>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <div>分类导航</div>
                <div>站内搜索</div>
                <div>Sitemap / Robots</div>
                <div>可扩展会员系统</div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}


import { siteConfig } from "@/config/site";

export default function Hero() {
  const { badge, title, titleHighlight, subtitle, ctaPrimary, ctaSecondary, ctaPrimaryUrl, ctaSecondaryUrl } = siteConfig.hero;

  return (
    <section id="hero" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-violet-600 bg-violet-50 rounded-full">
          {badge}
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {title}
          <span className="text-violet-500"> {titleHighlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ctaPrimaryUrl}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors text-center"
          >
            {ctaPrimary}
          </a>
          <a
            href={ctaSecondaryUrl}
            className="w-full sm:w-auto px-8 py-3.5 border border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors text-center"
          >
            {ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}

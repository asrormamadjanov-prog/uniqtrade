import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { company, type Lang } from "@/lib/content";

export function SiteHeader({ lang }: { lang: Lang }) {
  const ru = lang === "ru";
  const home = ru ? "/ru" : "/";
  const links = contentLinks(lang);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href={home} className="brand" aria-label={company.legalName}>
          <Image src="/logo.png" alt={company.shortName} width={72} height={72} priority />
        </Link>

        <nav className="desktop-nav">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link className="header-contact" href={ru ? "/ru/contact" : "/contact"}>
            {ru ? "Запрос" : "Request a Quote"} <ArrowUpRight size={15} />
          </Link>
          <Link className="lang-switch" href={ru ? "/" : "/ru"}>{ru ? "EN" : "RU"}</Link>
        </nav>

        <div className="mobile-actions">
          <Link className="lang-switch" href={ru ? "/" : "/ru"}>{ru ? "EN" : "RU"}</Link>
          <details className="mobile-menu">
            <summary aria-label="Open menu"><Menu size={23}/></summary>
            <div className="mobile-menu-panel">
              {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <Link className="mobile-request" href={ru ? "/ru/contact" : "/contact"}>
                {ru ? "Запросить предложение" : "Request a Quote"} <ArrowUpRight size={15}/>
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function contentLinks(lang: Lang): [string, string][] {
  const ru = lang === "ru";
  return ru
    ? [["Продукция", "/ru/products"], ["Отрасли", "/ru/industries"], ["О компании", "/ru/about"], ["Почему мы", "/ru/why-uniq"], ["Как работаем", "/ru/how-we-work"]]
    : [["Products", "/products"], ["Industries", "/industries"], ["About Us", "/about"], ["Why Us", "/why-uniq"], ["How We Work", "/how-we-work"]];
}

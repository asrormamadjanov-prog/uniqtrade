import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function IndustryCards({ items, lang, limit }: { items: readonly (readonly [string,string,string])[]; lang: "en"|"ru"; limit?: number }) {
  const shown = limit ? items.slice(0, limit) : items;
  return (
    <div className="industry-grid">
      {shown.map(([title, text, image], i) => (
        <article className="industry-card" key={title}>
          <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
          <div className="image-overlay strong" />
          <div className="industry-content">
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            {limit && <Link href={lang === "ru" ? "/ru/industries" : "/industries"}>{lang === "ru" ? "Подробнее" : "View industry"} <ArrowUpRight size={14} /></Link>}
          </div>
        </article>
      ))}
    </div>
  );
}

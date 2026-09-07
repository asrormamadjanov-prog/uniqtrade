import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function IndustryCards({ items, lang, limit }: { items: readonly (readonly [string,string,string])[]; lang: "en"|"ru"; limit?: number }) {
  const shown = limit ? items.slice(0, limit) : items;
  return (
    <div className="industry-grid">
      {shown.map(([title, text, image], i) => (
        <article className="industry-card" key={title}>
          <div className="industry-card-image">
            <Image src={image} alt={title} fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="image-overlay strong" />
            <span className="industry-number">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="industry-content">
            <h3>{title}</h3>
            <p>{text}</p>
            {limit && <Link href={lang === "ru" ? "/ru/industries" : "/industries"}>{lang === "ru" ? "Подробнее" : "View industry"} <ArrowUpRight size={14} /></Link>}
          </div>
        </article>
      ))}
    </div>
  );
}

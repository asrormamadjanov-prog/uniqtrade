import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProductCards({ items, lang, limit }: { items: readonly (readonly [string,string,string])[]; lang: "en"|"ru"; limit?: number }) {
  const shown = limit ? items.slice(0, limit) : items;
  return (
    <div className="card-grid product-grid">
      {shown.map(([title, text, image], i) => (
        <article className="image-card product-card" key={title}>
          <div className="card-image">
            <Image src={image} alt={title} fill sizes="(max-width: 900px) 100vw, 33vw" />
            <div className="image-overlay" />
            <span className="card-number">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="card-body">
            <h3>{title}</h3>
            <p>{text}</p>
            {limit && <Link href={lang === "ru" ? "/ru/products" : "/products"}>{lang === "ru" ? "Смотреть категорию" : "View category"} <ArrowUpRight size={14}/></Link>}
          </div>
        </article>
      ))}
    </div>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Lang } from "@/lib/content";

export function CTA({ lang, title, text }: { lang: Lang; title: string; text: string }) {
  const ru = lang === "ru";
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">{ru ? "ЗАПРОС ПРЕДЛОЖЕНИЯ" : "REQUEST A QUOTE"}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="button button-blue" href={ru ? "/ru/contact" : "/contact"}>
          {ru ? "Запросить предложение" : "Request a Quote"} <ArrowUpRight size={17}/>
        </Link>
      </div>
    </section>
  );
}

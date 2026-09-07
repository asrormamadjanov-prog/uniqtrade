import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { images, type Lang } from "@/lib/content";

export function HomeHero({ lang, data }: { lang: Lang; data: any }) {
  const ru = lang === "ru";
  return (
    <section className="hero">
      <div className="hero-image"><Image src={images.hero} alt="Industrial equipment and compressor installation" fill priority sizes="100vw" /></div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow">{data.eyebrow}</span>
          <h1>{data.titleA}<br/><span>{data.titleB}</span></h1>
          <p>{data.text}</p>
          <div className="buttons">
            <Link className="button button-blue" href={ru ? "/ru/contact" : "/contact"}>{data.primary} <ArrowUpRight size={17}/></Link>
            <Link className="button button-white" href={ru ? "/ru/products" : "/products"}>{data.secondary}</Link>
          </div>
        </div>
        <div className="hero-proof">
          <div className="hero-proof-label">{ru ? "ОСНОВНЫЕ КАТЕГОРИИ" : "CORE CATEGORIES"}</div>
          {data.proof.map((item: string, i: number) => (
            <div className="hero-proof-item" key={item}><span>{String(i + 1).padStart(2,"0")}</span><strong>{item}</strong></div>
          ))}
        </div>
      </div>
    </section>
  );
}

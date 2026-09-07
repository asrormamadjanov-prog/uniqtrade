import Image from "next/image";
import { images, type Lang } from "@/lib/content";

export function PageHero({ eyebrow, title, text, image = images.refinery, lang }: {
  eyebrow: string; title: string; text: string; image?: string; lang: Lang;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-image"><Image src={image} alt="" fill sizes="100vw" priority style={{ objectFit: "cover" }} /></div>
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

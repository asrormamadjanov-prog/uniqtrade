import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CTA } from "@/components/CTA";
import { ProductCards } from "@/components/ProductCards";
import { IndustryCards } from "@/components/IndustryCards";
import { HomeHero } from "@/components/HomeHero";
import { content, images } from "@/lib/content";

export default function Home() {
  const c = content.en;
  return <>
    <SiteHeader lang="en"/>
    <main>
      <HomeHero lang="en" data={c.hero}/>
      <section className="intro">
        <div className="container intro-grid">
          <div><span className="eyebrow">{c.home.introEyebrow}</span><div className="intro-side-note">U.S.-based industrial trading company</div></div>
          <div>
            <h2 className="section-title">{c.home.introTitle}</h2>
            <p className="section-text">{c.home.introText}</p>
            <Link className="button button-outline" href="/about" style={{marginTop:28}}>About UNIQ TRADE <ArrowUpRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">PRODUCTS</span><h2 className="section-title">{c.home.productsTitle}</h2></div><p>{c.home.productsText}</p></div>
          <ProductCards items={c.products} lang="en" limit={6}/>
          <div className="section-link-row"><Link href="/products" className="text-link">View all product categories <ArrowUpRight size={16}/></Link></div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">INDUSTRIES</span><h2 className="section-title">{c.home.industriesTitle}</h2></div><p>{c.home.industriesText}</p></div>
          <IndustryCards items={c.industries} lang="en" limit={4}/>
        </div>
      </section>

      <section className="split">
        <div className="split-image"><Image src={images.machinery} alt="Industrial machinery" fill sizes="50vw"/></div>
        <div className="split-copy"><span className="eyebrow">WHY UNIQ TRADE</span><h2 className="section-title">{c.home.whyTitle}</h2><p>{c.home.whyText}</p>
          <div className="feature-list">{c.why.slice(0,4).map(([n,t,d])=><div className="feature-item" key={n}><span>{n}</span><strong>{t}</strong><p>{d}</p></div>)}</div>
          <Link className="button button-outline" href="/why-uniq" style={{width:"fit-content",marginTop:28}}>Why UNIQ TRADE <ArrowUpRight size={16}/></Link>
        </div>
      </section>

      <section className="dark-section">
        <div className="container"><div className="section-head"><div><span className="eyebrow">PROCESS</span><h2 className="section-title">{c.home.processTitle}</h2></div><p>{c.home.processText}</p></div>
          <div className="process">{c.process.slice(0,6).map(([n,t,d])=><div className="process-item" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
        </div>
      </section>

      <section className="quote-band">
        <div className="quote-band-image"><Image src={images.compressor} alt="Industrial compressor system" fill sizes="100vw"/></div>
        <div className="quote-band-overlay"/>
        <div className="container quote-band-content">
          <span className="eyebrow">REQUEST A QUOTE</span>
          <h2>{c.home.ctaTitle}</h2>
          <p>{c.home.ctaText}</p>
          <Link className="button button-blue" href="/contact">Send Your Requirement <ArrowUpRight size={17}/></Link>
        </div>
      </section>
    </main>
    <SiteFooter lang="en"/>
  </>;
}

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ProductCards } from "@/components/ProductCards";
import { CTA } from "@/components/CTA";
import { content, images } from "@/lib/content";

export default function ProductsPage(){const c=content.en;return <><SiteHeader lang="en"/><PageHero lang="en" eyebrow="PRODUCTS" title="Industrial spare parts & components." text="A focused supply portfolio covering the equipment and components used across industrial facilities." image={images.compressor}/><section className="content-section"><div className="container"><div className="lead-row"><div><span className="eyebrow">SUPPLY PORTFOLIO</span><h2 className="text-mega">Components for critical industrial equipment.</h2></div><p className="prose">We can review OEM part numbers, equipment models, drawings, specifications and equivalent requirements. Product availability depends on the specific request.</p></div><ProductCards items={c.products} lang="en"/></div></section><CTA lang="en" title={c.home.ctaTitle} text={c.home.ctaText}/><SiteFooter lang="en"/></>}

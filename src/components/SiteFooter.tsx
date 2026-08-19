import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, type Lang } from "@/lib/content";

export function SiteFooter({ lang }: { lang: Lang }) {
  const ru = lang === "ru";
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href={ru ? "/ru" : "/"} className="footer-brand"><Image src="/logo-footer.png" alt="UNIQ" width={44} height={60}/></Link>
          <p>{ru ? "Поставка запасных частей и компонентов для промышленного оборудования." : "Industrial spare parts sourcing and supply for demanding applications."}</p>
        </div>
        <div className="footer-links">
          <Link href={ru ? "/ru/products" : "/products"}>{ru ? "Продукция" : "Products"}</Link>
          <Link href={ru ? "/ru/industries" : "/industries"}>{ru ? "Отрасли" : "Industries"}</Link>
          <Link href={ru ? "/ru/about" : "/about"}>{ru ? "О компании" : "About Us"}</Link>
          <Link href={ru ? "/ru/why-uniq" : "/why-uniq"}>{ru ? "Почему мы" : "Why Us"}</Link>
          <Link href={ru ? "/ru/how-we-work" : "/how-we-work"}>{ru ? "Как работаем" : "How We Work"}</Link>
          <Link href={ru ? "/ru/contact" : "/contact"}>{ru ? "Запрос предложения" : "Request a Quote"}</Link>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${company.email}`}><Mail size={15}/>{company.email}</a>
          <a href={`tel:${company.phoneHref}`}><Phone size={15}/>{company.phoneDisplay}</a>
          <span><MapPin size={15}/><span>{company.address[0]}<br/>{company.address[1]}<br/>{company.address[2]}</span></span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} UNIQ TRADE INCORPORATED</span>
        <span>{ru ? "Промышленное снабжение и торговля" : "Industrial trading & supply"}</span>
      </div>
    </footer>
  );
}

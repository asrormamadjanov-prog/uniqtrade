"use client";

import { useState } from "react";
import { company, type Lang } from "@/lib/content";

export function QuoteForm({ lang }: { lang: Lang }) {
  const ru = lang === "ru";
  const [sent, setSent] = useState(false);

  return (
    <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div className="form-intro">
        {ru ? "Укажите известные технические данные — это поможет быстрее рассмотреть запрос." : "Share the technical details you have available to help us review the requirement."}
      </div>
      <div className="form-grid">
        <div className="field"><label htmlFor="name">{ru ? "Имя" : "Name"}</label><input required id="name" name="name" autoComplete="name" /></div>
        <div className="field"><label htmlFor="company">{ru ? "Компания" : "Company"}</label><input id="company" name="company" autoComplete="organization" /></div>
        <div className="field"><label htmlFor="email">Email</label><input required id="email" type="email" name="email" autoComplete="email" /></div>
        <div className="field"><label htmlFor="phone">{ru ? "Телефон" : "Phone"}</label><input id="phone" type="tel" name="phone" autoComplete="tel" /></div>
        <div className="field full"><label htmlFor="equipment">{ru ? "Оборудование / Производитель / Артикул" : "Equipment / Manufacturer / Part Number"}</label><input required id="equipment" name="equipment" placeholder={ru ? "Например: модель, OEM-артикул или производитель" : "For example: model, OEM part number or manufacturer"} /></div>
        <div className="field"><label htmlFor="quantity">{ru ? "Количество" : "Quantity"}</label><input id="quantity" name="quantity" inputMode="numeric" /></div>
        <div className="field full"><label htmlFor="message">{ru ? "Дополнительные сведения" : "Additional details"}</label><textarea id="message" name="message" placeholder={ru ? "Опишите требование, условия или известные параметры" : "Describe the requirement, conditions or known parameters"} /></div>
      </div>
      <button className="button button-blue submit-button" type="submit">
        {sent ? (ru ? "Контактные данные показаны ниже" : "Contact details are shown below") : (ru ? "Подготовить запрос" : "Prepare request")}
      </button>
      {sent && <p className="form-note">
        {ru ? <>Отправка формы будет подключена отдельно. Пока, пожалуйста, направьте данные по email: <a href={`mailto:${company.email}`}>{company.email}</a></> :
          <>Email delivery will be connected separately. For now, please send the details directly to <a href={`mailto:${company.email}`}>{company.email}</a>.</>}
      </p>}
    </form>
  );
}

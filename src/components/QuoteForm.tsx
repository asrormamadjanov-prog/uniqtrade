"use client";

import { useState } from "react";
import { Paperclip } from "lucide-react";
import { company, type Lang } from "@/lib/content";

export function QuoteForm({ lang }: { lang: Lang }) {
  const ru = lang === "ru";
  const [sent, setSent] = useState(false);

  return (
    <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div className="form-grid">
        <div className="field"><label>{ru ? "Имя" : "Name"}</label><input required name="name" /></div>
        <div className="field"><label>{ru ? "Компания" : "Company"}</label><input name="company" /></div>
        <div className="field"><label>{ru ? "Email" : "Email"}</label><input required type="email" name="email" /></div>
        <div className="field"><label>{ru ? "Телефон" : "Phone"}</label><input type="tel" name="phone" /></div>
        <div className="field"><label>{ru ? "Оборудование / Производитель / Артикул" : "Equipment / Manufacturer / Part Number"}</label><input required name="equipment" /></div>
        <div className="field"><label>{ru ? "Количество" : "Quantity"}</label><input name="quantity" /></div>
        <div className="field full"><label>{ru ? "Сообщение" : "Message"}</label><textarea name="message" /></div>
        <div className="field full">
          <label>{ru ? "Файл / спецификация (необязательно)" : "Attachment / Specification (optional)"}</label>
          <div className="file-input"><Paperclip size={16}/><input type="file" name="attachment" /></div>
        </div>
      </div>
      <button className="button button-blue submit-button" type="submit">
        {sent ? (ru ? "Запрос подготовлен" : "Request Prepared") : (ru ? "Отправить запрос" : "Send Request")}
      </button>
      {sent && <p className="form-note">
        {ru ? <>Форма подготовлена. Для отправки запроса напишите нам напрямую: <a href={`mailto:${company.email}`}>{company.email}</a></> :
          <>Your request is prepared. Please send the details directly to <a href={`mailto:${company.email}`}>{company.email}</a>.</>}
      </p>}
    </form>
  );
}

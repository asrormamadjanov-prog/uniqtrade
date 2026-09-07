import { Check } from "lucide-react";
import type { Lang } from "@/lib/content";

export function RequestGuide({ lang }: { lang: Lang }) {
  const ru = lang === "ru";
  const items = ru
    ? ["Модель и производитель оборудования", "OEM-артикул или описание требуемой детали", "Количество и желаемый срок поставки", "Чертёж или спецификация — если она уже есть"]
    : ["Equipment model and manufacturer", "OEM part number or a description of the required item", "Quantity and required delivery timeframe", "Drawing or specification, if already available"];

  return (
    <aside className="request-guide">
      <span className="eyebrow">{ru ? "ДЛЯ ТОЧНОГО ЗАПРОСА" : "FOR A PRECISE REQUEST"}</span>
      <h2>{ru ? "Начните с известных данных." : "Start with the details you know."}</h2>
      <p>{ru ? "Не все сведения обязательны. Чем точнее исходные данные, тем проще рассмотреть потребность." : "Not every detail is required. The more precise the starting information, the easier the requirement is to review."}</p>
      <ul>
        {items.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}
      </ul>
    </aside>
  );
}

import { useTranslation } from "react-i18next";

export default function Conditions() {
  const { t } = useTranslation();

  const articles = t("conditions.articles", { returnObjects: true });

  return (
    <section className="py-40 px-6 max-w-5xl mx-auto text-justify leading-relaxed text-brand-black/80">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("conditions.title")}</h1>

      {Object.entries(articles).map(([key, art]) => (
        <article key={key} className="mb-8">
          <h2 className="font-semibold text-lg text-brand-black mb-2">{art.title}</h2>
          <p>{art.text}</p>
        </article>
      ))}

      <p className="mt-12 text-sm text-center text-brand-black/60">{t("conditions.updated")}</p>
    </section>
  );
}

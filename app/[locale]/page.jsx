import initTranslations from "../i18n";
import TranslationsProvider from "./components/TranslationProvider/TranslationProvider";

export default async function Home({ params: { locale } }) {
  const { t,resources } = await initTranslations(locale, ["common"]);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={"common"}>
      <main className="">{t("homepage")}</main>
    </TranslationsProvider>
  );
}

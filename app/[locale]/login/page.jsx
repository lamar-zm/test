import initTranslations from "@/app/i18n";
import LoginLayout from "../layouts/Auth/LoginLayout";
import TranslationsProvider from "../components/TranslationProvider/TranslationProvider";
import LoginForm from "../components/AuthForms/LoginForm/LoginForm";

const Login = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, "common");
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={"common"}
    >
      <LoginLayout locale={locale}>
        <LoginForm/>
      </LoginLayout>
    </TranslationsProvider>
  );
};

export default Login;

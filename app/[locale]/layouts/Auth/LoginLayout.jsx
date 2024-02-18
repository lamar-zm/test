import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React from "react";
import "../../globals.css";
import Image from "next/image";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../components/TranslationProvider/TranslationProvider";
const LoginLayout = async ({ children, locale }) => {
  const { t, resources } = await initTranslations(locale, "common");
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={"common"}
    >
      <section className="flex flex-col">
        <Navbar />
        <section className="flex max-container">
          <Image
            src="/assets/loginIllustration.svg"
            alt="loginIllustration"
            width={0}
            height={0}
            className="object-cover w-1/2 h-full"
          />
        <div>{children}</div>

        </section>
        <Footer />
      </section>
    </TranslationsProvider>
  );
};

export default LoginLayout;

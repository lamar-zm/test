"use client";
import React from "react";
import { useEffect, useCallback } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import i18nConfig from "@/i18nConfig";
import Button from "../Button/Button";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const updateDirection = useCallback((locale) => {
    const direction = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", locale);
    localStorage.setItem("direction", direction);
  }, []);

  useEffect(() => {
    updateDirection(currentLocale);
  }, [currentLocale, updateDirection]);

  const handleChange = (e) => {
    const newLocale = e.target.value;
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (currentLocale === i18nConfig.defaultLocale) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }
  };

  const { t } = useTranslation("common");
  return (
    <nav className="flex items-center justify-between w-full h-24 bg-white px-12">
      <div className="flex items-center gap-10">
        <Image
          src={"/assets/colourdLogo.svg"}
          alt="logo"
          width={0}
          height={0}
          className="object-cover w-full h-full"
        />
        <ul className="flex items-center gap-4 w-full">
          <li className="w-full flex">
            <Link
              className="main-color text-xl w-full font-ElMessiri"
              href={"#"}
            >
              {t("main_page")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <select
          className="bg-[#F7F7FA] p-3 rounded-xl cursor-pointer"
          onChange={handleChange}
          value={currentLocale}
        >
          <option value="en">English</option>
          <option value="ar">عربي</option>
        </select>
        <Button text={t("login")} type="button" />
      </div>
    </nav>
  );
};

export default React.memo(Navbar);

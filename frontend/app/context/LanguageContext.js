"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../locales/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en"); // Default language is English

  useEffect(() => {
    // Check saved preference if exists
    try {
      const saved = localStorage.getItem("preferred_lang");
      if (saved && (saved === "en" || saved === "ar")) {
        setLang(saved);
      }
    } catch (e) {
      // localStorage may be disabled or SSR
    }
  }, []);

  useEffect(() => {
    // Sync html element attributes for accessibility and layout
    const dir = lang === "ar" ? "rtl" : "ltr";
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
    try {
      localStorage.setItem("preferred_lang", lang);
    } catch (e) {}
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const currentTranslations = translations[lang] || translations.ar;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir: currentTranslations.dir,
        isRTL: lang === "ar",
        t: currentTranslations,
        toggleLanguage,
        setLang,
      }}
    >
      <div dir={currentTranslations.dir} className={lang === "ar" ? "font-arabic" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

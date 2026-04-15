"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Lang = "en" | "hi";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({ lang: "en", toggle: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("mg_lang") as Lang;
    if (saved === "hi") setLang("hi");
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "en" ? "hi" : "en";
      localStorage.setItem("mg_lang", next);
      return next;
    });
  };

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

"use client";

import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as "nl" | "en")}
      className="px-1 rounded border text-xs border-gray-300 bg-white md:text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Select language"
    >
      <option value="nl">🇳🇱 NL</option>
      <option value="en">🇬🇧 EN</option>
    </select>
  );
};

export default LanguageSwitcher;

"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <div className="md:grid grid-cols-[1.2fr_0.8fr] px-2 justify-between max-w-6xl mx-auto mt-10 container gap-5 pb-10">
      <div className="bg-linear-to-b  from-[rgba(225,200,150,0.3)] to-white border border-black/8 shadow-lg rounded-xl py-4">
        <div className="px-3 py-2">
          <p className="text-[rgba(30,42,90,.92)] rounded-2xl border border-[rgba(30,42,90,0.16)] inline-flex bg-[rgba(30,42,90,0.05)] px-2 text-sm py-1 font-bold">
            {t.hero_badge}
          </p>
        </div>
        <div className="px-3">
          <h1 className="text-2xl font-bold">{t.hero_heading}</h1>
          <p className="pt-2 text-gray-600">{t.hero_p1}</p>
          <p className="pt-1 text-gray-600">{t.hero_p2}</p>
        </div>
        <div className="px-3 py-6">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe1TNogr0bb2_JD56H91wRCJfW8lYGOjJWpkS_bNyLabP6ahw/viewform?usp=dialog"
            target="_blank"
            className="px-4 py-3 bg-blue-950 rounded-lg text-white text-xs md:text-sm font-bold hover:bg-blue-900 transition"
          >
            {t.hero_cta}
          </Link>
        </div>
        <div className="px-3 flex mb-2 gap-2 flex-wrap">
          <p className="shrink-0 text-sm rounded-3xl border border-[rgba(30,42,90,0.16)] inline-flex px-2 py-2 font-bold">
            {t.hero_date}
          </p>
          <p className="shrink-0 text-sm rounded-3xl border border-[rgba(30,42,90,0.16)] inline-flex px-2 py-2 font-bold">
            {t.hero_time}
          </p>
          <p className="shrink-0 text-sm rounded-3xl border border-[rgba(30,42,90,0.16)] inline-flex px-2 py-2 font-bold">
            {t.hero_location}
          </p>
          <p className="shrink-0 text-sm rounded-3xl border border-[rgba(30,42,90,0.16)] inline-flex px-2 py-2 font-bold">
            {t.hero_food}
          </p>
        </div>
      </div>
      <div className="relative bg-[url('/LifeTree.jpeg')] bg-cover bg-center bg-no-repeat shadow-lg rounded-xl min-h-62.5 mt-5 md:mt-0"></div>
    </div>
  );
};

export default HeroSection;

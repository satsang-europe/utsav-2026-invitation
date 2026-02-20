"use client";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border border-gray-50 shadow-sm">
      <div className="flex flex-col md:flex-row px-2 py-2 justify-between md:items-center md:max-w-6xl mx-auto gap-5">
        <div className="flex gap-2 items-center">
          <Image
            src="/SElogo.png"
            width={40}
            height={40}
            alt="Satsang Europe Logo"
          />
          <div className="flex flex-col justify-center items-start">
            <p className="font-bold">Utsav 2026</p>
            <p className="text-sm text-gray-600">{t.footer_hosted}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-3 text-sm text-gray-600">
          <div className="font-bold">{t.footer_contact}</div>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/satsang.europe"
              target="_blank"
            >
              <FaFacebookSquare size={30} />
            </Link>
            <Link
              href="https://www.instagram.com/satsang.europe"
              target="_blank"
            >
              <FaInstagramSquare size={30} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

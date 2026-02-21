"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const EventRegister = () => {
  const { t } = useLanguage();
  return (
    <section className="max-w-6xl mx-auto pb-10 px-2">
      <h2 className="text-2xl font-bold px-2 mb-2">{t.event_heading}</h2>
      <div className="rounded-lg shadow-md overflow-hidden bg-yellow-50">
        <h3 className="text-xl font-bold pl-4 pt-2 mb-4">{t.event_details}</h3>
        <div className="px-4 py-4">
          <table className="w-full text-left">
            <tbody className="text-gray-600">
              <tr>
                <td className="py-2 font-semibold text-gray-500 w-32">
                  {t.event_date_label}
                </td>
                <td className="py-2">{t.event_date}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-gray-500">
                  {t.event_time_label}
                </td>
                <td className="py-2">{t.event_time}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-gray-500">
                  {t.event_venue_label}
                </td>
                <td className="py-2">{t.event_venue}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-gray-500">
                  {t.event_entry_label}
                </td>
                <td className="py-2">{t.event_entry}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-gray-500">
                  {t.event_food_label}
                </td>
                <td className="py-2">{t.event_food}</td>
              </tr>
            </tbody>
          </table>
          <div className="rounded-lg shadow px-4 py-4 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.838706815088!2d5.895657977554965!3d51.95513267789572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7a67939746363%3A0x6fd73006bfba54b9!2sSlochterenweg%2029%2C%206835%20CD%20Arnhem%2C%20Netherlands!5e0!3m2!1sen!2sno!4v1771147779797!5m2!1sen!2sno"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full rounded-lg"
              height="400"
            ></iframe>
          </div>
          <div className="px-2 md:px-40 block">
            <Link
              href="https://forms.gle/5uuw2XCXS6kcpm4z6"
              target="_blank"
              className="block w-full text-center px-4 py-3 bg-blue-950 rounded-lg text-white text-xs md:text-sm font-bold hover:bg-blue-900 transition"
            >
              {t.event_cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventRegister;

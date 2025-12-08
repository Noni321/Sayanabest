import { useLanguage } from "@/lib/language-context";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const PHONE_NUMBER = "0554276643";
const WHATSAPP_LINK = `https://wa.me/966${PHONE_NUMBER.slice(1)}`;

export function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer 
      className="bg-gray-900 text-white py-12 md:py-16"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <h3 
              className={`text-2xl font-bold mb-4 ${
                isRTL ? "font-cairo" : "font-poppins"
              }`}
              data-testid="text-footer-brand"
            >
              {t("brandName")}
            </h3>
            <p 
              className={`text-gray-400 leading-relaxed ${
                isRTL ? "font-tajawal" : "font-inter"
              }`}
              data-testid="text-footer-description"
            >
              {t("footerDesc")}
            </p>
          </div>

          <div>
            <h4 
              className={`text-lg font-semibold mb-4 ${
                isRTL ? "font-cairo" : "font-poppins"
              }`}
            >
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#services" 
                  className={`text-gray-400 hover:text-white transition-colors ${
                    isRTL ? "font-tajawal" : "font-inter"
                  }`}
                  data-testid="link-footer-services"
                >
                  {t("services")}
                </a>
              </li>
              <li>
                <a 
                  href="#warranty" 
                  className={`text-gray-400 hover:text-white transition-colors ${
                    isRTL ? "font-tajawal" : "font-inter"
                  }`}
                  data-testid="link-footer-warranty"
                >
                  {t("warranty")}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className={`text-gray-400 hover:text-white transition-colors ${
                    isRTL ? "font-tajawal" : "font-inter"
                  }`}
                  data-testid="link-footer-contact"
                >
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className={`text-lg font-semibold mb-4 ${
                isRTL ? "font-cairo" : "font-poppins"
              }`}
            >
              {t("contact")}
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className={`flex items-center gap-3 text-gray-400 hover:text-white transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                  data-testid="link-footer-phone"
                >
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span className="font-mono">{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-gray-400 hover:text-white transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                  data-testid="link-footer-whatsapp"
                >
                  <MessageCircle className="h-5 w-5 text-green-500" />
                  <span>{t("whatsapp")}</span>
                </a>
              </li>
              <li className={`flex items-center gap-3 text-gray-400 ${isRTL ? "flex-row-reverse" : ""}`} data-testid="text-footer-location">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className={isRTL ? "font-tajawal" : "font-inter"}>
                  {isRTL ? "جدة، المملكة العربية السعودية" : "Jeddah, Saudi Arabia"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className={`text-gray-500 text-sm ${isRTL ? "font-tajawal" : "font-inter"}`}>
            &copy; {new Date().getFullYear()} {t("brandName")}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

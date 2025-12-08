import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Phone, Globe } from "lucide-react";

const PHONE_NUMBER = "0554276643";

export function StickyHeader() {
  const { t, isRTL, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
      data-testid="sticky-header"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <a 
            href="#" 
            className={`text-xl md:text-2xl font-bold transition-colors ${
              isScrolled 
                ? "text-blue-900 dark:text-blue-400" 
                : "text-white"
            } ${isRTL ? "font-cairo" : "font-poppins"}`}
            data-testid="link-logo"
          >
            {t("brandName")}
          </a>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="icon"
              className={`${
                isScrolled
                  ? "text-blue-900 dark:text-blue-400"
                  : "text-white"
              }`}
              data-testid="button-toggle-language"
            >
              <Globe className="h-5 w-5" />
            </Button>

            <Button
              onClick={() => window.open(`tel:${PHONE_NUMBER}`, "_self")}
              className={`gap-2 rounded-xl font-semibold transition-all ${
                isScrolled
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white/20 backdrop-blur-md text-white border border-white/30"
              } ${isRTL ? "font-cairo" : "font-inter"}`}
              data-testid="button-call-now-header"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{t("callNow")}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

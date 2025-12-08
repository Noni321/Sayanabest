import { useLanguage } from "@/lib/language-context";
import { Shield, CheckCircle } from "lucide-react";

export function GuaranteeSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden"
      id="warranty"
      data-testid="guarantee-section"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl animate-pulse-ring" />
              <div className="relative flex flex-col items-center justify-center w-40 h-40 md:w-56 md:h-56 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <Shield className="absolute -top-6 h-12 w-12 text-white" />
                <span 
                  className={`text-6xl md:text-8xl font-bold text-white ${
                    isRTL ? "font-cairo" : "font-poppins"
                  }`}
                  data-testid="text-guarantee-number"
                >
                  {t("guaranteeNumber")}
                </span>
                <span 
                  className={`text-xl md:text-2xl text-white/80 ${
                    isRTL ? "font-cairo" : "font-inter"
                  }`}
                >
                  {t("guaranteeDays")}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-start max-w-lg">
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 ${
                isRTL ? "font-cairo" : "font-poppins"
              }`}
              data-testid="text-guarantee-title"
            >
              {t("guaranteeTitle")}
            </h2>
            
            <p 
              className={`text-lg md:text-xl text-white/80 mb-8 ${
                isRTL ? "font-tajawal" : "font-inter"
              }`}
              data-testid="text-guarantee-description"
            >
              {t("guaranteeText")}
            </p>

            <div className={`flex items-center justify-center lg:justify-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <CheckCircle className="h-5 w-5" />
              </div>
              <span 
                className={`text-white/90 ${
                  isRTL ? "font-tajawal" : "font-inter"
                }`}
              >
                {t("guaranteeText")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

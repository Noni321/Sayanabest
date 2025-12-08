import { useLanguage } from "@/lib/language-context";
import { MapPin } from "lucide-react";

export function CoverageSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className="py-16 md:py-24 bg-background"
      data-testid="coverage-section"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="relative flex h-32 w-32 md:h-48 md:w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl">
              <MapPin className="h-16 w-16 md:h-24 md:w-24 text-white" />
            </div>
          </div>

          <div className="text-center md:text-start">
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 ${
                isRTL ? "font-cairo" : "font-poppins"
              }`}
              data-testid="text-coverage-title"
            >
              {t("coverageTitle")}
            </h2>
            
            <p 
              className={`text-xl md:text-2xl text-muted-foreground ${
                isRTL ? "font-tajawal" : "font-inter"
              }`}
              data-testid="text-coverage-description"
            >
              {t("coverageText")}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              {(isRTL 
                ? ["شمال جدة", "جنوب جدة", "وسط جدة", "شرق جدة"] 
                : ["North Jeddah", "South Jeddah", "Central Jeddah", "East Jeddah"]
              ).map((area, index) => (
                <span
                  key={area}
                  className={`px-4 py-2 bg-muted rounded-lg text-sm font-medium text-muted-foreground ${
                    isRTL ? "font-tajawal" : "font-inter"
                  }`}
                  data-testid={`chip-coverage-area-${index}`}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

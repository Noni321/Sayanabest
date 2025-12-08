import { useLanguage } from "@/lib/language-context";
import { SiSamsung } from "react-icons/si";

const brands = [
  { name: "Whirlpool", logo: "Whirlpool" },
  { name: "Maytag", logo: "Maytag" },
  { name: "General Electric", logo: "GE" },
  { name: "Ariston", logo: "Ariston" },
  { name: "Samsung", logo: "Samsung", icon: SiSamsung },
  { name: "Daewoo", logo: "Daewoo" },
  { name: "Toshiba", logo: "Toshiba" },
];

export function BrandsSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className="py-16 md:py-24 bg-muted/30"
      data-testid="brands-section"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 ${
              isRTL ? "font-cairo" : "font-poppins"
            }`}
            data-testid="text-brands-title"
          >
            {t("brandsTitle")}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.05}s` }}
              data-testid={`brand-${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {brand.icon ? (
                <brand.icon className="h-8 w-8 md:h-10 md:w-10 text-muted-foreground group-hover:text-blue-600 transition-colors" />
              ) : (
                <span 
                  className={`text-lg md:text-xl font-bold text-muted-foreground group-hover:text-blue-600 transition-colors text-center ${
                    isRTL ? "font-cairo" : "font-poppins"
                  }`}
                >
                  {brand.logo}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

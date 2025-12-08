import { useLanguage } from "@/lib/language-context";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wind, Waves, ThermometerSnowflake } from "lucide-react";
import acImage from "@assets/1765213419606_1765216155900.jpg";
import washingImage from "@assets/1765212643302_1765216156118.jpg";
import fridgeImage from "@assets/1765212174451_1765216156237.jpg";

export function ServicesSection() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      id: "ac",
      icon: Wind,
      title: t("acTitle"),
      description: t("acDesc"),
      image: acImage,
      features: [t("acInstallation"), t("acRepair"), t("acMaintenance")],
    },
    {
      id: "washing",
      icon: Waves,
      title: t("washingTitle"),
      description: t("washingDesc"),
      image: washingImage,
      features: [t("stains"), t("drainage"), t("noise"), t("jammedDoor"), t("vibration"), t("leaks")],
    },
    {
      id: "fridge",
      icon: ThermometerSnowflake,
      title: t("fridgeTitle"),
      description: t("fridgeDesc"),
      image: fridgeImage,
      features: [],
    },
  ];

  return (
    <section 
      className="py-16 md:py-24 bg-background"
      id="services"
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 ${
              isRTL ? "font-cairo" : "font-poppins"
            }`}
            data-testid="text-services-title"
          >
            {t("servicesTitle")}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group overflow-visible bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-service-${service.id}`}
            >
              <div className="relative h-48 md:h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 
                    className={`text-xl font-bold text-white ${
                      isRTL ? "font-cairo" : "font-poppins"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p 
                  className={`text-muted-foreground mb-4 ${
                    isRTL ? "font-tajawal" : "font-inter"
                  }`}
                >
                  {service.description}
                </p>

                {service.features.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

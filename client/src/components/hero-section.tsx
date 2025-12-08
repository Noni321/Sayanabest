import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Shield, MapPin, CalendarCheck } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import heroImage from "@assets/1765212863974_1765216156068.jpg";

const PHONE_NUMBER = "0554276643";
const WHATSAPP_LINK = `https://wa.me/966${PHONE_NUMBER.slice(1)}`;

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
          <Badge 
            className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2 text-sm font-medium gap-2"
            data-testid="badge-warranty"
          >
            <Shield className="h-4 w-4" />
            {t("warrantyBadge")}
          </Badge>
          <Badge 
            className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2 text-sm font-medium gap-2"
            data-testid="badge-coverage"
          >
            <MapPin className="h-4 w-4" />
            {t("jeddahBadge")}
          </Badge>
        </div>

        <h1 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up ${
            isRTL ? "font-cairo" : "font-poppins"
          }`}
          style={{ animationDelay: "0.1s" }}
          data-testid="text-hero-title"
        >
          {t("heroTitle")}
        </h1>

        <p 
          className={`text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up ${
            isRTL ? "font-tajawal" : "font-inter"
          }`}
          style={{ animationDelay: "0.2s" }}
          data-testid="text-hero-subtitle"
        >
          {t("heroSubtitle")}
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            onClick={() => window.open(`tel:${PHONE_NUMBER}`, "_self")}
            size="lg"
            className={`w-full sm:w-auto gap-3 h-14 px-8 text-lg font-semibold rounded-2xl bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/30 transition-transform hover:scale-[1.02] ${
              isRTL ? "font-cairo flex-row-reverse" : "font-inter"
            }`}
            data-testid="button-call-now-hero"
          >
            <Phone className="h-5 w-5" />
            {t("callNow")}
          </Button>

          <Button
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            size="lg"
            variant="outline"
            className={`w-full sm:w-auto gap-3 h-14 px-8 text-lg font-semibold rounded-2xl bg-green-500/20 backdrop-blur-md text-white border border-green-400/50 shadow-xl transition-transform hover:scale-[1.02] ${
              isRTL ? "font-cairo flex-row-reverse" : "font-inter"
            }`}
            data-testid="button-whatsapp-hero"
          >
            <MessageCircle className="h-5 w-5" />
            {t("whatsapp")}
          </Button>

          <BookingForm
            trigger={
              <Button
                size="lg"
                variant="outline"
                className={`w-full sm:w-auto gap-3 h-14 px-8 text-lg font-semibold rounded-2xl bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-xl transition-transform hover:scale-[1.02] ${
                  isRTL ? "font-cairo flex-row-reverse" : "font-inter"
                }`}
                data-testid="button-book-now-hero"
              >
                <CalendarCheck className="h-5 w-5" />
                {t("bookNow")}
              </Button>
            }
          />
        </div>

        <div 
          className="mt-16 flex items-center justify-center gap-2 text-white/60 text-sm animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <Phone className="h-4 w-4" />
          <span className="font-mono">{PHONE_NUMBER}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

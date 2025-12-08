import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
  hasSelectedLanguage: boolean;
}

const translations = {
  ar: {
    brandName: "صيانةبست",
    callNow: "اتصل الآن",
    whatsapp: "واتساب",
    heroTitle: "صيانةبست - الخيار الأفضل لإصلاح منزلك",
    heroSubtitle: "خدمة صيانة متخصصة في جدة. سريعة، موثوقة، ومضمونة.",
    servicesTitle: "خدماتنا",
    acTitle: "صيانة المكيفات",
    acDesc: "تركيب وإصلاح وصيانة جميع أنواع المكيفات",
    washingTitle: "صيانة الغسالات",
    washingDesc: "إصلاح جميع أعطال الغسالات",
    washingIssues: "البقع، التصريف، الضوضاء، الباب المحشور، الاهتزاز، التسريبات",
    fridgeTitle: "صيانة الثلاجات",
    fridgeDesc: "إصلاح وصيانة جميع أنواع الثلاجات",
    fridgeIssues: "عدم التبريد، تسرب المياه، أصوات غريبة، تراكم الثلج، مشاكل الباب",
    cooling: "عدم التبريد",
    waterLeak: "تسرب المياه",
    strangeNoises: "أصوات غريبة",
    iceBuildUp: "تراكم الثلج",
    doorIssues: "مشاكل الباب",
    guaranteeTitle: "ضمان",
    guaranteeNumber: "30",
    guaranteeDays: "يوم",
    guaranteeText: "إذا تكررت المشكلة، نصلحها مجاناً",
    brandsTitle: "العلامات التجارية التي نخدمها",
    coverageTitle: "منطقة الخدمة",
    coverageText: "خدمة في جميع أنحاء جدة",
    footerDesc: "خدمة صيانة وإصلاح الأجهزة المنزلية في جدة. نوفر خدمة صيانة وإصلاح الأجهزة المنزلية في جدة بخبرة عالية وسرعة استجابة. نتعامل مع جميع الأعطال للمكيفات، الغسالات، الثلاجات.",
    selectLanguage: "اختر اللغة",
    arabic: "العربية",
    english: "English",
    warrantyBadge: "ضمان 30 يوم",
    jeddahBadge: "تغطية جدة",
    quickLinks: "روابط سريعة",
    services: "الخدمات",
    warranty: "الضمان",
    contact: "اتصل بنا",
    phone: "الهاتف",
    acInstallation: "تركيب المكيفات",
    acRepair: "إصلاح المكيفات",
    acMaintenance: "صيانة دورية",
    stains: "البقع",
    drainage: "مشاكل التصريف",
    noise: "الضوضاء",
    jammedDoor: "الباب المحشور",
    vibration: "الاهتزاز",
    leaks: "التسريبات",
  },
  en: {
    brandName: "SiyanahBest",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    heroTitle: "SiyanahBest - The Best Choice for Your Home Repair",
    heroSubtitle: "Expert maintenance in Jeddah. Fast, reliable, and guaranteed.",
    servicesTitle: "Our Services",
    acTitle: "AC Maintenance",
    acDesc: "Installation, repair and maintenance of all AC types",
    washingTitle: "Washing Machine Repair",
    washingDesc: "Repair of all washing machine issues",
    washingIssues: "Stains, Drainage, Noise, Jammed Door, Vibration, Leaks",
    fridgeTitle: "Refrigerator Maintenance",
    fridgeDesc: "Repair and maintenance of all refrigerator types",
    fridgeIssues: "No Cooling, Water Leak, Strange Noises, Ice Build-up, Door Issues",
    cooling: "No Cooling",
    waterLeak: "Water Leak",
    strangeNoises: "Strange Noises",
    iceBuildUp: "Ice Build-up",
    doorIssues: "Door Issues",
    guaranteeTitle: "Warranty",
    guaranteeNumber: "30",
    guaranteeDays: "Day",
    guaranteeText: "If the issue recurs, we fix it for free",
    brandsTitle: "Brands We Service",
    coverageTitle: "Service Area",
    coverageText: "Service throughout Jeddah",
    footerDesc: "Home appliance maintenance and repair service in Jeddah. We provide home appliance maintenance and repair services in Jeddah with high expertise and fast response. We handle all AC, washing machine, and refrigerator issues.",
    selectLanguage: "Select Language",
    arabic: "العربية",
    english: "English",
    warrantyBadge: "30-Day Warranty",
    jeddahBadge: "Jeddah Coverage",
    quickLinks: "Quick Links",
    services: "Services",
    warranty: "Warranty",
    contact: "Contact",
    phone: "Phone",
    acInstallation: "AC Installation",
    acRepair: "AC Repair",
    acMaintenance: "Regular Maintenance",
    stains: "Stains",
    drainage: "Drainage Issues",
    noise: "Noise",
    jammedDoor: "Jammed Door",
    vibration: "Vibration",
    leaks: "Leaks",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("siyanahbest-language") as Language;
    if (savedLang) {
      setLanguageState(savedLang);
      setHasSelectedLanguage(true);
    }
  }, []);

  useEffect(() => {
    const dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    document.documentElement.setAttribute("dir", dir);
    document.body.dir = dir;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setHasSelectedLanguage(true);
    localStorage.setItem("siyanahbest-language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isRTL: language === "ar",
        t,
        hasSelectedLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

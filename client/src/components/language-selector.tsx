import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSelector() {
  const { setLanguage, hasSelectedLanguage } = useLanguage();

  if (hasSelectedLanguage) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950"
      data-testid="language-selector-overlay"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
      </div>
      
      <div className="relative flex flex-col items-center gap-8 p-8 md:p-12">
        <div className="flex items-center gap-4 animate-fade-in">
          <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Globe className="h-8 w-8 md:h-10 md:w-10 text-white" />
          </div>
        </div>

        <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Select Language / اختر اللغة
          </h1>
          <p className="text-white/70 text-sm md:text-base">
            Choose your preferred language
          </p>
        </div>

        <div 
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-fade-in-up" 
          style={{ animationDelay: "0.2s" }}
        >
          <Button
            onClick={() => setLanguage("ar")}
            className="flex-1 h-16 md:h-20 text-lg md:text-xl font-cairo font-bold bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            variant="ghost"
            data-testid="button-language-arabic"
          >
            <span className="flex flex-col items-center gap-1">
              <span className="text-2xl md:text-3xl">العربية</span>
              <span className="text-xs md:text-sm text-white/60">Arabic</span>
            </span>
          </Button>

          <Button
            onClick={() => setLanguage("en")}
            className="flex-1 h-16 md:h-20 text-lg md:text-xl font-inter font-semibold bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            variant="ghost"
            data-testid="button-language-english"
          >
            <span className="flex flex-col items-center gap-1">
              <span className="text-2xl md:text-3xl">English</span>
              <span className="text-xs md:text-sm text-white/60">الإنجليزية</span>
            </span>
          </Button>
        </div>

        <div 
          className="flex items-center gap-3 text-white/50 text-sm animate-fade-in" 
          style={{ animationDelay: "0.4s" }}
        >
          <div className="h-px w-12 bg-white/20" />
          <span>SiyanahBest | صيانةبست</span>
          <div className="h-px w-12 bg-white/20" />
        </div>
      </div>
    </div>
  );
}

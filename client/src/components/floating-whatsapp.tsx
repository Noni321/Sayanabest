import { useLanguage } from "@/lib/language-context";
import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "0554276643";
const WHATSAPP_LINK = `https://wa.me/966${PHONE_NUMBER.slice(1)}`;

export function FloatingWhatsApp() {
  const { isRTL } = useLanguage();

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 transition-transform hover:scale-110 ${
        isRTL ? "left-6" : "right-6"
      }`}
      data-testid="button-floating-whatsapp"
    >
      <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}

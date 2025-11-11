import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/50672099038", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Agendar por WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
    </Button>
  );
};

export default WhatsAppButton;

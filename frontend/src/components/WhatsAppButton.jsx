import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919835852462"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        z-[9999]
        flex
        items-center
        justify-center
        h-14
        w-14
        rounded-full
        bg-green-500
        shadow-xl
        transition-all
        duration-300
        hover:scale-110
        hover:bg-green-600
      "
      style={{
        right: "max(16px, env(safe-area-inset-right))",
        bottom: "max(16px, env(safe-area-inset-bottom))",
      }}
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
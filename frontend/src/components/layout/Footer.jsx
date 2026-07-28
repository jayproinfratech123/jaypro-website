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
        bottom-24
        right-4
        md:bottom-6
        md:right-6
        z-[9999]
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
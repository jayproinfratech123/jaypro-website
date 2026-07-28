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
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        text-white
        shadow-2xl
        transition-transform
        duration-300
        hover:scale-110
      "
      style={{
        right: "20px",
        bottom: "100px", // Above the bottom navigation
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
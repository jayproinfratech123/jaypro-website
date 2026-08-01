import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919835852462"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
      role="button"
      className="
        fixed
        right-5
        bottom-20
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
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-green-400/50
      "
    >
      <FaWhatsapp
        size={30}
        aria-hidden="true"
        focusable="false"
      />

      <span className="sr-only">
        Open WhatsApp chat with our construction experts
      </span>
    </a>
  );
};

export default WhatsAppButton;
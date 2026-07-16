import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919835852462"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-2xl hover:bg-green-600 transition duration-300 hover:scale-110"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
  );
};

export default WhatsAppButton;
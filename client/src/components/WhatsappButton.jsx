import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ phoneNumber, color }) => {
  const handleClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    let url = "";

    if (isMobile) {
      url = `https://wa.me/${phoneNumber}`;
    } else {
      url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }
    window.open(url);
  };

  return (
    <button
      style={{
        color: color,
        fontSize: "1.5rem",
        border: "none",
        backgroundColor: "transparent",
      }}
      onClick={handleClick}
    >
      <FaWhatsapp />
    </button>
  );
};

export default WhatsAppButton;

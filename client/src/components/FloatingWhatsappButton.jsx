import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsappButton = ({ phoneNumber }) => {
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
        color: "white",
        fontSize: "3.6rem",
        border: "none",
        backgroundColor: "transparent",
        position: "fixed",
        right: "30px",
        bottom: "30px",
        zIndex: "900",
      }}
      onClick={handleClick}
    >
      <FaWhatsapp style={{ borderRadius: "50%", backgroundColor: "#25D366" }} />
    </button>
  );
};

export default FloatingWhatsappButton;

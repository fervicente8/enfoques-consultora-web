import React from "react";
import WhatsAppButton from "./WhatsappButton";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        height: "80px",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "0 20px",
      }}
    >
      <p style={{ color: "white", cursor: "default", userSelect: "none" }}>Copyright © 2023</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <a
          href='https://www.facebook.com/enfoquesconsultora'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook style={{ color: "white", fontSize: "1.5rem" }} />
        </a>
        <WhatsAppButton phoneNumber={2494482322} color={"white"} />
      </div>
    </div>
  );
};

export default Footer;

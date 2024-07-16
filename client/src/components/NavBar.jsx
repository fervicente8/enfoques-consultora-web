import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../images/logoEmpresa.png";
import { FaFacebook } from "react-icons/fa";
import WhatsAppButton from "./WhatsappButton";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const NavBar = () => {
  const [locationState, setLocationState] = useState();
  const [hmbActive, setHmbActive] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLocationState(`#${entry.target.id}`);
        }
      });
    };

    const options = {
      threshold: 0.6,
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    const targetQuienesSomos = document.getElementById("quienes-somos");
    const targetQueOfrecemos = document.getElementById("que-ofrecemos");
    const contacto = document.getElementById("contacto");

    if (targetQuienesSomos) {
      observer.observe(targetQuienesSomos);
    }

    if (targetQueOfrecemos) {
      observer.observe(targetQueOfrecemos);
    }

    if (contacto) {
      observer.observe(contacto);
    }

    return () => {
      if (targetQuienesSomos) {
        observer.unobserve(targetQuienesSomos);
      }
      if (targetQueOfrecemos) {
        observer.unobserve(targetQueOfrecemos);
      }
      if (contacto) {
        observer.unobserve(contacto);
      }
    };
  }, []);

  return (
    <div className={styles.containerNavBar}>
      <div className={styles.containerHmbMenu}>
        {hmbActive ? (
          <MdClose
            onClick={() => setHmbActive(false)}
            style={{ color: "black", fontSize: "28px" }}
          />
        ) : (
          <MdMenu
            onClick={() => setHmbActive(true)}
            style={{ color: "black", fontSize: "28px" }}
          />
        )}
        {hmbActive ? (
          <div className={styles.containerHmbContent}>
            <Link
              onClick={() => setHmbActive(false)}
              className={
                locationState === "#quienes-somos"
                  ? styles.isActive
                  : styles.nonActive
              }
              to='quienes-somos'
              smooth={true}
              duration={500}
            >
              Quienes somos
            </Link>
            <Link
              onClick={() => setHmbActive(false)}
              className={
                locationState === "#que-ofrecemos"
                  ? styles.isActive
                  : styles.nonActive
              }
              to='que-ofrecemos'
              smooth={true}
              duration={500}
            >
              Qué ofrecemos
            </Link>
            <Link
              onClick={() => setHmbActive(false)}
              className={
                locationState === "#contacto"
                  ? styles.isActive
                  : styles.nonActive
              }
              to='contacto'
              smooth={true}
              duration={500}
            >
              Contacto
            </Link>
            <div className={styles.containerHmbSocial}>
              <a
                href='https://www.facebook.com/enfoquesconsultora'
                target='_blank'
                rel='noreferrer'
              >
                <FaFacebook />
              </a>
              {/* <a
                href='https://www.linkedin.com/company/enfoque-consultora'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin />
              </a> */}
            </div>
          </div>
        ) : null}
      </div>
      <img src={logo} alt='Logo' />
      <ul className={styles.listContainer}>
        <li>
          <Link
            className={
              locationState === "#quienes-somos"
                ? styles.isActive
                : styles.nonActive
            }
            to='quienes-somos'
            smooth={true}
            duration={500}
          >
            Quienes somos
          </Link>
        </li>
        <li>
          <Link
            className={
              locationState === "#que-ofrecemos"
                ? styles.isActive
                : styles.nonActive
            }
            to='que-ofrecemos'
            smooth={true}
            duration={500}
          >
            Qué ofrecemos
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setHmbActive(false)}
            className={
              locationState === "#contacto" ? styles.isActive : styles.nonActive
            }
            to='contacto'
            smooth={true}
            duration={500}
          >
            Contacto
          </Link>
        </li>
      </ul>
      <div className={styles.containerSocialLinks}>
        <a
          href='https://www.facebook.com/enfoquesconsultora'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook />
        </a>
        {/* <a
          href='https://www.linkedin.com/company/enfoque-consultora'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin />
        </a> */}
        <WhatsAppButton phoneNumber={2494482322} color={"#212529"} />
      </div>
    </div>
  );
};

export default NavBar;

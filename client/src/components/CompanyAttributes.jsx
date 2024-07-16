import React from "react";
import { Element, Link } from "react-scroll";
import styles from "./CompanyAttributes.module.css";
import backgroundPic from "../images/image7.jpg";
import { RxLapTimer, RxTarget, RxEyeOpen } from "react-icons/rx";

const CompanyAttributes = () => {
  return (
    <div className={styles.container}>
      <Element name='section' className={styles.section}>
        <div className={styles.content}>
          <div className={styles.containerAttribute}>
            <RxTarget style={{ fontSize: "80px", marginBottom: "10px" }} />
            <h3>Nuestra misión</h3>
            <p>
              Nuestra meta es orientar a nuestros clientes para que alcancen sus
              objetivos a través de nuestro profesionalismo y experiencia.
            </p>
          </div>
          <div className={styles.containerAttribute}>
            <RxEyeOpen style={{ fontSize: "80px", marginBottom: "10px" }} />
            <h3>Nuestra visión</h3>
            <p>
              Nos esforzamos por mantenernos a la vanguardia en el campo de las
              encuestas y la consultoría, y por ofrecer servicios de alta
              calidad que ayuden a nuestros clientes a tomar decisiones
              informadas y alcanzar el éxito en sus proyectos.
            </p>
          </div>
          <div className={styles.containerAttribute}>
            <RxLapTimer style={{ fontSize: "80px", marginBottom: "10px" }} />
            <h3>Nuestra experiencia</h3>
            <p>
              Con más de 15 años de experiencia profesional, hemos demostrado
              nuestra capacidad para ofrecer servicios confiables y de calidad
              en el campo de la consultoría política, empresarial e
              institucional. Nuestro equipo de profesionales nos permite brindar
              soluciones integrales y adaptadas a las necesidades de cada
              cliente.
            </p>
          </div>
        </div>
      </Element>
      <div className={styles.imageContainer}>
        <div className={styles.imageOverlay} />
        <img src={backgroundPic} alt='Background' className={styles.image} />
      </div>
      <div className={styles.scrollDown}>
        <Link to='section' smooth={true} duration={500}></Link>
      </div>
    </div>
  );
};

export default CompanyAttributes;

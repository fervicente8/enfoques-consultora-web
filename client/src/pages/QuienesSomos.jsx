import React from "react";
import styles from "./QuienesSomos.module.css";

const QuienesSomos = () => {
  return (
    <div id='quienes-somos' className={styles.whoWeAreContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.img}></div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.titleContainer}>
          <h2>Quiénes&nbsp;</h2>
          <h2>Somos</h2>
        </div>
        <div className={styles.dataContainer}>
          <p>Somos una empresa dedicada a:</p>
          <p>
            • Estudios de opinión pública y de mercado a través de encuestas
          </p>
          <p>
            • Servicios de asesoría a organismos gubernamentales e instituciones
            en materia de gestión, generando información e indicadores de
            diferente índole
          </p>
          <p>
            Contamos con un equipo de profesionales de diferentes áreas como la
            Sociología, la Psicología, la Economía, los Sistemas, entre otras
            áreas.
          </p>
        </div>
        <div className={styles.directoraDataContainer}>
          <p>Directora: Julieta Vicente</p>
          <p>Licenciada en Sociología</p>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;

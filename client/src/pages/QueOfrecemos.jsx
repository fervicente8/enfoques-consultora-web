import React, { useState } from "react";
import styles from "./QueOfrecemos.module.css";
import { GoDash, GoPlus } from "react-icons/go";
import Slider from "../components/Slider";

const QueOfrecemos = () => {
  const [selected, setSelected] = useState();

  return (
    <div id='que-ofrecemos' className={styles.whatWeDoContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.titleContainer}>
          <h2>Qué&nbsp;</h2>
          <h2>Ofrecemos</h2>
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.containerTitleAndDesc}>
            <div
              className={styles.containerTitleWithButton}
              onClick={() => (selected !== 1 ? setSelected(1) : setSelected(0))}
            >
              <p>Estudios de Opinión Pública y de Mercado</p>
              {selected !== 1 ? <GoPlus /> : <GoDash />}
            </div>
            {selected !== 1 ? null : (
              <p className={styles.description}>
                Realizamos encuestas y análisis exhaustivos para comprender las
                preferencias, actitudes y comportamientos de la sociedad y los
                consumidores. Te proporcionamos información valiosa que te
                ayudará a definir estrategias efectivas.
              </p>
            )}
          </div>
          <div className={styles.containerTitleAndDesc}>
            <div
              className={styles.containerTitleWithButton}
              onClick={() => (selected !== 2 ? setSelected(2) : setSelected(0))}
            >
              <p>Asesoría Política y Empresarial</p>
              {selected !== 2 ? <GoPlus /> : <GoDash />}
            </div>
            {selected !== 2 ? null : (
              <p className={styles.description}>
                Contamos con profesionales altamente capacitados en áreas como
                la Sociología, la Psicología, la Economía y los Sistemas.
                Nuestro equipo te brindará asesoramiento estratégico para que
                puedas tomar decisiones acertadas en tu organización, ya sea en
                el ámbito público o privado.
              </p>
            )}
          </div>
          <div className={styles.containerTitleAndDesc}>
            <div
              className={styles.containerTitleWithButton}
              onClick={() => (selected !== 3 ? setSelected(3) : setSelected(0))}
            >
              <p>Encuestas de Satisfacción y Hábitos de Consumo</p>
              {selected !== 3 ? <GoPlus /> : <GoDash />}
            </div>
            {selected !== 3 ? null : (
              <p className={styles.description}>
                Evaluamos la satisfacción de tus clientes y su comportamiento de
                compra para que puedas mejorar la calidad de tus productos o
                servicios y aumentar la fidelidad de tus clientes.
              </p>
            )}
          </div>
          <div className={styles.containerTitleAndDesc}>
            <div
              className={styles.containerTitleWithButton}
              onClick={() => (selected !== 4 ? setSelected(4) : setSelected(0))}
            >
              <p>Mediciones de Impacto de Políticas Públicas</p>
              {selected !== 4 ? <GoPlus /> : <GoDash />}
            </div>
            {selected !== 4 ? null : (
              <p className={styles.description}>
                Analizamos el impacto de las políticas públicas en la sociedad y
                te brindamos informes detallados que te ayudarán a evaluar su
                efectividad y realizar ajustes necesarios.
              </p>
            )}
          </div>
          <div className={styles.containerTitleAndDesc}>
            <div
              className={styles.containerTitleWithButton}
              onClick={() => (selected !== 5 ? setSelected(5) : setSelected(0))}
            >
              <p>Trabajos de Campo y Tercearización de Servicios</p>
              {selected !== 5 ? <GoPlus /> : <GoDash />}
            </div>
            {selected !== 5 ? null : (
              <p className={styles.description}>
                Realizamos trabajos de campo en territorio para consultoras
                nacionales que buscan externalizar este servicio. Nuestro equipo
                se encargará de recolectar datos de manera eficiente y
                confiable.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Slider />
      </div>
    </div>
  );
};

export default QueOfrecemos;

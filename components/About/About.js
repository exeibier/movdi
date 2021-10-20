import React from "react";
import styles from "../../styles/About.module.scss";
import Slide from "react-reveal/Fade";

const About = () => {
  return (
    <section className={`container py-5 ${styles.about_section}`} id="about">
      <div className="row">
        <div className="col-lg-6">
          <Slide top>
            <div className={`text-center ${styles.about_img}`}>
              <img src="/assets/SVG/about-img.svg" alt="nosotros" />
            </div>
          </Slide>
        </div>
        <div className={`col-lg-6 ${styles.about_text}`}>
          <h2 className="text-uppercase">
            About us <img src="assets/SVG/star.svg" alt="star" />
          </h2>
          <div className={`${styles.about_p}`}>
            <p>
              MÁS QUE UNA AGENCIA, <b>SOMOS UN MOVIMIENTO DIGITAL</b> ROMPEMOS
              ESQUEMAS, <b>MARCAMOS TENDENCIA</b>
            </p>
            <p>
              NUESTRA MISIÓN ES CONVERTIR TU MARCA EN UN STATEMENT CON UNA
              COMUNIDAD <b>ACTIVA Y VIBRANTE.</b>
            </p>
          </div>
        </div>
      </div>
      <div className={`row my-5 ${styles.stats}`}>
        <div className="col-12 text-center my-5">
          <h2>
            WE ARE THE AGENCY
            <br />
            YOU’RE LOOKING FOR
          </h2>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <img className="my-5" src="assets/SVG/star.svg" alt="star" />
          <h2 className={`${styles.points}`}>5 AÑOS DE EXPERIENCIA</h2>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <img className="my-5" src="assets/SVG/star.svg" alt="star" />
          <h2 className={`${styles.points}`}>100 PROYECTOS DIGITALES</h2>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <img className="my-5" src="assets/SVG/star.svg" alt="star" />
          <h2 className={`${styles.points}`}>5,000 INFLUENCERS EN EL CREW</h2>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import styles from "../../styles/Work.module.scss";
import Fade from "react-reveal/Fade";

const Clients = () => {
  return (
    <section className={`${styles.work_section} `}>
		<div className="container py-5">
		<div className="row">
        <div className="col-12 my-2 text-center">
          <h2>LET’S WORK TOGETHER</h2>
        </div>
        <div className="col-12 text-center">
          <p>
            MÁNDANOS UN MENSAJE Y CUÉNTANOS SOBRE TU PROYECTO.
           <br/> <b>¡TE ASEGURAMOS QUE TENDREMOS LA SOLUCIÓN PERFECTA!</b>
          </p>
        </div>
        <div className={`col-6 text-center py-3 my-5 ${styles.bar}`}>
          <a href="mailto:hola@movdi.mx">hola@movdi.mx</a>
        </div>
        <div className="col-6 text-center py-3 my-5">
          <a href="tel:+525548418158">t. 55 484 18158</a>
        </div>
      </div>
		</div>
    </section>
  );
};

export default Clients;

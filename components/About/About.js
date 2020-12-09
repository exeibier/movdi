import React from 'react'
import styles from '../../styles/About.module.scss'
import Slide from 'react-reveal/Fade';


const About = () => {
	return(
		<section className={`container py-5 ${styles.about_section}`} id='about'>
			<div className="row">
				<div className="col-lg-6">
					<Slide top>
						<div className={`text-center ${styles.about_img}`}>
							<img src="/assets/SVG/about-img.svg" alt="nosotros"/>
						</div>
					</Slide>
				</div>
				<div className={`col-lg-6 ${styles.about_text}`}>
					<h2 className='text-uppercase'>Acerca <img src="assets/SVG/star.svg" alt="star"/></h2>
					<p>
						Conectamos marcas con el talento adecuado para hacer <b>campañas impactantes</b> y de gran alcance, que superen las 
						expectativas marcadas y creen <b>conexiones humanas.</b> Nuestras estrategias están diseñadas para lograr el mayor <b>retorno 
						de inversión</b> para nuestros clientes. Manejamos todo el proceso: negociación con influencers, diseño y ejecución de 
						campañas y medición de los resultados.
					</p>
					<p>
						Nos caracterizamos por mantener una <b>estrecha relación con el
						talento inhouse y externo.</b> Trabajamos con +500 influencers.
					</p>
				</div>
			</div>
		</section>
  )
}

export default About;
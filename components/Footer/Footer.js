import React from 'react'
import styles from '../../styles/Footer.module.scss'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <footer className={styles.footer_container}>
			<div className={styles.footer_background}>
				<div className={`text-center ${styles.footer_stars}`}>
						<img src="/assets/SVG/stars_3.svg" alt=""/>
					</div>
					<div className="container py-5">
						<div className="row justify-content-center">
							<div className="col-lg-2 pb-4">
								<img src="assets/SVG/logo-white.svg" alt="movdi blanco"/>
							</div>
							<div className="col-lg-2">
								<h2 className='text-uppercase'>Menú</h2>
								<span className='py-2'></span>
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">Acerca</a></li>
									<li><a href="#">Categorías</a></li>
									<li><a href="#">Clientes</a></li>
								</ul>		
							</div>
							<div className="col-lg-2">
								<h2 className='text-uppercase'>Dirección</h2>
								<span className='py-2'></span>
								<ul>
									<li><a href="https://goo.gl/maps/SzD5HK9yt9sXo1o89" target='blank'>Blvd Adolfo Ruiz Cortines 5440, No. 902 Col. Olímpica Del. Coyoacán, CDMX</a></li>
								</ul>
							</div>
							<div className="col-lg-2">
								<h2 className='text-uppercase'>Contacto</h2>
								<span className='py-2'></span>
								<ul>
									<li><a href="mailito:info@movdi.mx">Email. info@movdi.mx</a></li>
									<li><a href="tel:5525755070">T. 55 2575 5070</a></li>
								</ul>					
							</div>
							<div className="col-lg-2">
								<h2 className='text-uppercase'>Siguenos</h2>
								<span className='py-2'></span>
								<ul>
									<li><a href="#">Facebook</a></li>
									<li><a href="#">Instagram</a></li>
									<li><a href="#">Tik Tok</a></li>
									<li><a href="#">Linkedin</a></li>
								</ul>
							</div>
						</div>
					</div>
			</div>
			<div className='text-center py-4'>
				<h3>Copyright MOVDI 2020</h3>
			</div>
    </footer>
  )
}

export default Footer;
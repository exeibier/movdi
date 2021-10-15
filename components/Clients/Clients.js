import React from 'react'
import styles from '../../styles/Clients.module.scss'
import Fade from 'react-reveal/Fade';


const Clients = () => {
	return (
		<section className={`container ${styles.client_section} py-5`} id='clients'>
			<h2 className='text-uppercase text-center pb-5'>Ellos han confiado en nosotros</h2>
			<Fade top cascade>
				<div className="row">
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-1.svg" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-2.svg" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-3.svg" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-4.svg" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-5.svg" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-6.svg" alt="heineken"/>
					</div>
				</div>
			</Fade>
			<Fade top cascade>
				<div className="row">
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-7.svg" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-8.svg" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-9.svg" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-10.svg" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-11.svg" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/SVG/p-12.svg" alt="heineken"/>
					</div>
				</div>
			</Fade>
			<div className="row justify-content-center">
				<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
					<img src="assets/SVG/p-13.svg" alt="heineken"/>
				</div>
				<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
					<img src="assets/SVG/p-14.svg" alt="heineken"/>
				</div>
				<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
					<img src="assets/SVG/p-15.svg" alt="heineken"/>
				</div>
				<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
					<img src="assets/SVG/p-16.svg" alt="heineken"/>
				</div>
				<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
					<img src="assets/SVG/p-17.svg" alt="heineken"/>
				</div>
				<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
					<img src="assets/SVG/p-18.svg" alt="heineken"/>
				</div>
			</div>
			<div className="row">
				<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
					<img src="assets/SVG/p-19.svg" alt="heineken"/>
				</div>
				<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
					<img src="assets/SVG/p-20.svg" alt="heineken"/>
				</div>
			</div>
		</section>
	)
}

export default Clients;
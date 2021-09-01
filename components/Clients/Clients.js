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
						<img src="assets/PNG/p-1.png" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/PNG/p-2.png" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/PNG/p-3.png" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/PNG/p-4.png" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/PNG/p-5.png" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/PNG/p-6.png" alt="heineken"/>
					</div>
				</div>
			</Fade>
			<Fade top cascade>
				<div className="row">
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/PNG/p-7.png" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/PNG/p-8.png" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/PNG/p-9.png" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/PNG/p-10.png" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/PNG/p-11.png" alt="heineken"/>
					</div>
					<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
						<img src="assets/PNG/p-12.png" alt="heineken"/>
					</div>
				</div>
			</Fade>
			<div className="row justify-content-center">
				<div className={`col-lg-2 col-6 ${styles.clients_image}`}>
					<img src="assets/PNG/p-13.png" alt="heineken"/>
				</div>
			</div>
		</section>
	)
}

export default Clients;
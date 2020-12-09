import React from 'react'
import styles from '../../styles/Categories.module.scss'
import Fade from 'react-reveal'

const Categories = () => {
	return(
		<section className={`py-5 ${styles.categories_section}`} id='categories'>
  	  		<div className="container">
				<h2 className='text-uppercase'>Categorias</h2>
				<div className="">
					<div className={`row ${styles.categories_wrap} pt-4`}>
						<div className={`col-lg-3 col-sm-6 ${styles.img_background}`}>
							<img src="/assets/SVG/c-1.svg" alt="fasion"/>
							<h2 className='text-uppercase'>Fasion & lifestyle</h2>
						</div>
						<div className={`col-lg-3 col-sm-6 ${styles.img_background}`}>
							<img src="/assets/SVG/c-2.svg" alt="fitness"/>
							<h2 className='text-uppercase'>Fitness & sports</h2>
						</div>
						<div className={`col-lg-3 col-sm-6 ${styles.img_background_2}`}>
							<img src="/assets/SVG/c-3.svg" alt="humor"/>
							<h2 className='text-uppercase'>Humor</h2>
						</div>
						<div className={`col-lg-3 col-sm-6 ${styles.img_background_2}`}>
							<img src="/assets/SVG/c-4.svg" alt="urban"/>
							<h2 className='text-uppercase'>Urban</h2>
						</div>
					</div>
					<div className={`row justify-content-center ${styles.categories_wrap} pt-4`}>
						<div className={`col-lg-3 col-sm-6 ${styles.img_background_2}`}>
								<img src="/assets/SVG/c-5.svg" alt="travel"/>
								<h2 className='text-uppercase'>Travel</h2>
							</div>
							<div className={`col-lg-3 col-sm-6 ${styles.img_background_2}`}>
								<img src="/assets/SVG/c-6.svg" alt="gaming"/>
								<h2 className='text-uppercase'>Gaming</h2>
							</div>
							<div className={`col-lg-3 ${styles.img_background_3}`}>
								<img src="/assets/SVG/c-7.svg" alt="arts"/>
								<h2 className='text-uppercase'>Arts</h2>
							</div>
					</div>
				</div>
  	  </div>
		</section>
  )
}

export default Categories;
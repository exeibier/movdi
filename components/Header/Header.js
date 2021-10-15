import React from 'react'
import styles from '../../styles/Header.module.scss'
import Parallax from 'react-rellax'
import Jump from 'react-reveal/Jump';

const Header = () => {
 
    return (
  <section className={`${styles.header}`} id='home'>
    <div className="container mr-0">
      <div className='row'>
        <div className={`col-lg-2 px-0 d-xs-none d-lg-block ${styles.header_text}`}>
        </div>
        <div className={`col-lg-10 px-0 mx-0 ${styles.background_header}`}>
          <Parallax speed={-1}>
            <div className={`${styles.header_text}`}>
              <div className={styles.stars_img}>
                <img src='/assets/SVG/stars.svg'/>
              </div>
              <h2 className='text-uppercase'>Welcome<br/>to movdi<br/> agency</h2>
            </div>
          </Parallax>
          <Jump>
            <div className={styles.arrows_header}>
              <img src="/assets/SVG/arrows.svg" alt="flechas"/>
            </div>
          </Jump>
        </div>      
      </div>
    </div>
    <div className={`mt-5 ${styles.header_about}`}>
      {/* <div className='text-center'>
        <h3>Influencers / Management / Marketing Metrics</h3>
      </div> */}
    </div>
  </section>
    )
}

export default Header
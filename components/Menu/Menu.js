import React, {useState, useEffect} from 'react'
import styles from '../../styles/Menu.module.scss'
import { Link } from 'react-scroll'
import HamburguerButton from '../Hamburguer/HamburguerButton'

function Menu(props){
const [menuNav, setMenuNav] = useState(true)

const changeBackground = () => {
  if(window.scrollY >= 90){
    setMenuNav(true)
  } else {
    setMenuNav(false)
  }
}

React.useEffect = (() => {
  changeBackground()
  window.addEventListener('scroll', changeBackground)

  return () => window.removeEventListener('scroll', changeBackground)
}, []);


  return(
    <>
      <header className={styles.menu}>
      <nav className={menuNav ?`${styles.menuNav} ${styles.follow}`: `${styles.menuNav}`}>
        <div className={styles.menu_toggle_button}>
          <HamburguerButton click={props.hamburguerClickHandler} />
        </div>
        <div>
          <a href='/' className={styles.menuLogo}><img src='/assets/SVG/logo.svg' alt='logo' /></a>
        </div>
        <div className={styles.spacer} />

        <div className={styles.menuItems}>
          <ul>
            <li>
              <Link
              activeClass={styles.active}
              to='home'
              spy
              smooth
              offset={-70}
              duration={500}
              >HOME
              </Link>
            </li>
            
            <li>
              <Link
              activeClass={styles.active}
              to='about'
              spy
              smooth
              offset={-70}
              duration={500}
              >ACERCA
              </Link>
            </li>
            <li>
              <Link
              activeClass={styles.active}
              to='categories'
              spy
              smooth
              offset={-70}
              duration={500}
              >CATEGORIAS
              </Link>
            </li>
            <li>
              <Link
              activeClass={styles.active}
              to='clients'
              spy
              smooth
              offset={-70}
              duration={500}
              >CLIENTES
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  )
  
}

export default Menu

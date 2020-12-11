import React from 'react'
import styles from '../../styles/Hamburguer.module.scss'

import { Link } from 'react-scroll'

const Hamburguer = props => (
  <nav className={styles.hamburguer}>
    <ul>
     
      <Link
        activeClass='active'
        to='home'
        spy
        smooth
        offset={-70}
        duration={500}
      >
        <li><a href='/'>HOME</a></li>

      </Link>
      <Link
        activeClass='active'
        to='about'
        spy
        smooth
        offset={-70}
        duration={500}
      >
        <li><a href='/'>ACERCA</a></li>

      </Link>
      <Link
        activeClass='active'
        to='categories'
        spy
        smooth
        offset={-70}
        duration={500}
      >
        <li><a href='/'>CATEGORIAS</a></li>

      </Link>
      <Link
        activeClass='active'
        to='clients'
        spy
        smooth
        offset={-70}
        duration={500}
      >
        <li><a href='/'>CLIENTES</a></li>

      </Link>
    </ul>
  </nav>
)

export default Hamburguer

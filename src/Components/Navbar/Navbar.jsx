import React from 'react'
// import styles from '../../pages/HomePage/HomePage.module.css'
import styles from '../Navbar/Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.HeadNavBar}>
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#prise">Услуги и цены</a></li>
                <li><a href="#contacts">Контакты</a></li>

            </ul>
        </div>
    )
}

export default Navbar
import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <div className={styles.MainFooter}>
            <p className={styles.logo}>MACHETE <br />BARBERSHOP</p>

            <div className={styles.about}>
                <li><a href="/">Главная</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#prise">Услуги и цены</a></li>
                <li><a href="#contacts">Контакты</a></li>
                <li><a href="tel:+7 (775) 697-07-07">+7 (775) 697-07-07</a></li>
            </div>
        </div>
    )
}

export default Footer

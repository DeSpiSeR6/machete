import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import styles from '../MainPage/MainPage.module.css'
const MainPage = () => {
    return (
        <div>
            <div className={styles.background}>


                <Navbar />



                <b><p className={styles.logoMain}>MACHETE<br /> BARBERSHOP</p></b>

                <div className={styles.mainBtn}>

                    <a href="#prise">  <button className={styles.miniBtn}>Прайс лист</button></a>
                    <button className={styles.miniBtn}>Записаться</button>

                </div>

            </div>
        </div>
    )
}

export default MainPage

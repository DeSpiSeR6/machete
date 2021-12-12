import React from 'react'
import styles from '../Advantages/Advantages.module.css'

const AdvantagesMap = ({ label, icon }) => {
    return (
        <div className={styles.AdvantagesMap}>
            <div className={styles.Adv}>
                <h1 className={styles.label1}>{label}</h1>
                <img src={icon} alt="МЕА" className={styles.imgIcon} />

            </div>
        </div>
    )
}

export default AdvantagesMap

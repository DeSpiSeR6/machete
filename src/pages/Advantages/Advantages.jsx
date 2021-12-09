import React, { useState, useEffect } from 'react'
import styles from '../Advantages/Advantages.module.css'
import AdvantagesMap from './AdvantagesMap'
import Beard from '../../Icons/Beard.png'
import butterfly from '../../Icons/butterfly.png'
import Comb from '../../Icons/Comb.png'
import Knife from '../../Icons/Knife.png'
import mustache from '../../Icons/mustache.png'
import Scissors from '../../Icons/Scissors.png'
import { Row, Col } from 'react-bootstrap'
const Advantages = () => {
    const advantagesList = [
        {
            firstName: 'Профессиональная команда мастеров',
            icon: "../../icon/butterfly.png"
        },
        {
            firstName: 'Мужские и детские стрижки',
            icon: { Scissors }
        },
        {
            firstName: 'Мытье и укладка',
            icon: { Comb }
        },
        {
            firstName: 'Офоромление бороды и усов',
            icon: { Beard }
        },

        {
            firstName: 'Традиционное влажное бритье',
            icon: { Knife }
        },
        {
            firstName: 'Качественные средства для ухода',
            icon: { mustache }
        },
    ]
    return (
        <Row xs={1} md={2} className="g-4" className={styles.Rowmeme}>
            {advantagesList.map(advantage => {
                return (
                    <Col className={styles.Colermeme}>
                        <AdvantagesMap label={advantage.firstName} icon={advantage.icon} />
                    </Col>)
            })}
        </Row>
    )
}
export default Advantages

import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './Slides.module.css'
import iconTest from '../../media/pexels-kaique-rocha-331989.jpg'
export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 2000

    };
    return (
        <div className={styles.Backround}>
            <Slider {...settings}>

                <div className={styles.Cards}>
                    <img src={iconTest} alt="" className={styles.Img} />


                </div>
                <div className={styles.Cards}>
                    <img src={iconTest} alt="" className={styles.Img} />

                </div>
                <div className={styles.Cards}>
                    <img src={iconTest} alt="" className={styles.Img} />

                </div>
                <div className={styles.Cards}>
                    <img src={iconTest} alt="" className={styles.Img} />

                </div>
                <div className={styles.Cards}>
                    <img src={iconTest} alt="" className={styles.Img} />

                </div>
                <div className={styles.Cards}>
                    <img src={iconTest} alt="" className={styles.Img} />
                </div>

            </Slider>
        </div>
    );
}
const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 400px;
}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`
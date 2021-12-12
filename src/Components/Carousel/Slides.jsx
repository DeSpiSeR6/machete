import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './Slides.module.css'
import iconTest from '../../media/pexels-kaique-rocha-331989.jpg'
import img1 from '../../media/inst/1.jpg'
import img2 from '../../media/inst/2.jpg'
import img3 from '../../media/inst/3.jpg'
import img4 from '../../media/inst/4.jpg'
import img5 from '../../media/inst/5.jpg'
import img6 from '../../media/inst/6.jpg'
import img7 from '../../media/inst/7.jpg'
import img8 from '../../media/inst/8.jpg'
import img9 from '../../media/inst/9.jpg'
import img10 from '../../media/inst/10.jpg'
import img11 from '../../media/inst/11.jpg'
import img12 from '../../media/inst/12.jpg'
import img13 from '../../media/inst/13.jpg'
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

                    <img src={img1} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>

                    <img src={img2} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>

                    <img src={img3} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>

                    <img src={img4} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>

                    <img src={img5} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>

                    <img src={img6} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>

                    <img src={img7} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>

                    <img src={img8} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>

                    <img src={img9} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>

                    <img src={img10} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>

                    <img src={img11} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>

                    <img src={img12} alt="" className={styles.Img} />

                </div>

                <div className={styles.Cards}>
                    <img src={img13} alt="" className={styles.Img} />
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
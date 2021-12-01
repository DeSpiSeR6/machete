import React from 'react'
import styles from './HomePage.module.css'
import Slides from '../Carousel/Slides'
import Navbar from '../Navbar/Navbar'
import photo1 from '../../media/1.png'
import photo2 from '../../media/2.png'
import photo3 from '../../media/3.png'
import photo4 from '../../media/4.png'
import photo5 from '../../media/5.png'
import icon1 from '../../Icons/1.png'
import icon2 from '../../Icons/2.png'
import icon3 from '../../Icons/3.png'
import icon4 from '../../Icons/4.png'
import icon5 from '../../Icons/5.png'
import icon6 from '../../Icons/6.png'
const HomePage = () => {
    return (
        <>
            <div className={styles.background}>

                <div className={styles.HeadNavBar}>
                    <Navbar />
                </div>


                <b><p className={styles.logoMain}>MACHETE<br /> BARBERSHOP</p></b>

                <div className={styles.mainBtn}>

                    <a href="#prise">  <button className={styles.miniBtn}>Прайс лист</button></a>
                    <button className={styles.miniBtn}>Записаться</button>

                </div>

            </div>

            <div className={styles.section2} id="about">

                <div className={styles.mainDescription}>

                    <div className={styles.description}>

                        <p className={styles.title3}>“ Это приятное атмосферное место для мужчин, где каждый сможет почувствовать себя как в гостях у друга и расслабиться. Для наших клиентов стрижка - это не пустая трата времени, а уютное времяпровождение. ”</p>
                        <h1 className={styles.title2}>MACHETE <br /> BARBERSHOP <br /> <br />  </h1>
                    </div>



                </div>



            </div>




            <div className={styles.section3}>
                <div className={styles.titleSec3}>
                    <h1 className={styles.section3Title}>У НАС ЕСТЬ</h1>
                </div>
                <div className={styles.sec}>
                    <div className={styles.section3text}>
                        <div className={styles.desc7}><h4 className={styles.sec3Title}>      Профессиональная       команда мастеров</h4>
                            <img src={icon5} alt="asada" style={{ width: "75%", paddingLeft: "80px" }} />
                        </div>
                        <div className={styles.desc6}><h4 className={styles.sec3Title}>                  Мужские и <br />           детские стрижки</h4>
                            <img src={icon2} alt="asada" style={{ width: "75%", paddingLeft: "80px", paddingTop: "20px" }} />
                        </div>
                        <div className={styles.desc1}> <h4 className={styles.sec3Title}>                Мытье и <br />                 укладка</h4>
                            <img src={icon3} alt="asada" style={{ width: "100%", paddingLeft: "50px", marginTop: "5px" }} />
                        </div>
                    </div>


                    <div className={styles.section3text1}>
                        <div className={styles.Boroda}>
                            <div className={styles.desc4}><h4 className={styles.sec3Title}>Оформление бороды <br />                     и усов</h4>
                                <img src={icon6} alt="asada" style={{ width: "80%", paddingLeft: "65px", marginTop: "-27px" }} />
                            </div>
                        </div>
                        <div className={styles.desc5}><h4 className={styles.sec3Title}>   Традиционное влажное <br />                        бритье</h4>
                            <img src={icon1} alt="asada" style={{ width: "85%", paddingLeft: "120px" }} />
                        </div>
                        <div className={styles.desc3}><h4 className={styles.sec3Title}>       Качественные <br /> средства для ухода</h4>
                            <img src={icon4} alt="asada" style={{ width: "100%", paddingLeft: "40px", marginTop: "-30px" }} />
                        </div>



                    </div>
                </div>



            </div>





            <div className={styles.section4} id="prise">
                <div className={styles.priceList}>
                    <div className={styles.OurPriceList}><h1 className={styles.OurPriceList1}>НАШ ПРАЙС-ЛИСТ</h1></div>
                    <div className={styles.table}>
                        <table style={{ width: "667.453px" }}>
                            <tbody>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Мужская стрижка</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;4000 тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Детская стрижка</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;3000 тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Отец+сын</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;6000 тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Оформление бороды/усов</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;2500 тг.</td>
                                </tr>
                                <tr style={{ height: "23.5px" }}>
                                    <td style={{ width: "589px", height: "23.5px" }}>&nbsp;Оформление бороды/усов+тонировка</td>
                                    <td style={{ width: "70.4531px", height: "23.5px" }}>&nbsp;2500тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Стрижка+борода</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;5500 тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Стрижка+борода+тонировка</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;6500 тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Стрижка под одну насадку</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;1000 тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Мытье и укладка</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;1000 тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Бритье головы</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;1000 тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Традиционное влажное бритье</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;3000 тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Депиляция волос</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;1000 тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;Чистка лица</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp; 2500 тг.</td>
                                </tr>
                                <tr style={{ height: "23px" }}>
                                    <td style={{ width: "589px", height: "23px" }}>&nbsp;8 - ая стрижка</td>
                                    <td style={{ width: "70.4531px", height: "23px" }}>&nbsp;Бесплатно</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>



            <Slides />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.697058389!2d73.07758739576197!3d49.81056277377401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424346d7b6f14d91%3A0xeb5dc8badbb37bdd!2z0YPQuy4g0JLQvtC40L3QvtCyLdC40L3RgtC10YDQvdCw0YbQuNC-0L3QsNC70LjRgdGC0L7QsiAxOCwg0JrQsNGA0LDQs9Cw0L3QtNCwIDEwMDAwMA!5e0!3m2!1sru!2skz!4v1637935930900!5m2!1sru!2skz" width="100%" height="800" allowfullscreen="" loading="lazy" id="contacts" style={{ userSelect: 'none' }}></iframe>

            <div className={styles.instagram}>

                <h1 className={styles.footerTxt}>Наши работы в <a target='_blank' href="//www.instagram.com/machete_barbershop/"><ins>Instagram</ins></a> </h1>

                <div className={styles.photos}>

                    <img src={photo1} width='300px' height='' alt="" />
                    <img src={photo2} width='300px' height='' alt="" />
                    <img src={photo3} width='300px' height='' alt="" />
                    <img src={photo4} width='300px' height='' alt="" />
                    <img src={photo5} width='300px' height='' alt="" />

                </div>

            </div>


            <div className={styles.footer}>

                <h3 className={styles.titleMini}>Machete Barbershop</h3>
                <div className={styles.adress}>
                    <p>Адрес:</p>
                    <p>Воинов-Интернационалистов,18</p>
                    <p>Шахтеров 36/2</p>
                </div>





            </div>


        </>
    )
}
export default HomePage;



























/*                     <h5 style={{ paddingLeft: "100px" }}>Стрижка мужская <hr align='center' style={{ width: "200px", marginLeft: "270px" }} /> <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Стрижка детская <hr align='center' style={{ width: "200px", marginLeft: "270px" }} /> <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Стрижка бороды <hr align='center' style={{ width: "200px", marginLeft: "270px" }} /> <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Королевское бритье <hr align='center' style={{ width: "200px", marginLeft: "270px" }} /> <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Классическое бритье <hr align='center' style={{ width: "200px", marginLeft: "270px" }} />  <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5 >
<h5 style={{ paddingLeft: "100px" }}>Стрижка машинкой <hr align='center' style={{ width: "200px", marginLeft: "270px" }} />  <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5 >
</div >
<h5 style={{ paddingLeft: "100px" }}>Комплексные услуги</h5>
<div className={styles.prising2}><p style={{ paddingLeft: "480px" }}>
</p>                   <h5 style={{ paddingLeft: "100px" }}>Отец + сын <hr align='center' style={{ width: "200px", marginLeft: "270px" }} />  <p style={{ paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Друг + друг <hr align='center' style={{ width: "200px", marginLeft: "270px" }} />  <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Стрижка + борода <hr align='center' style={{ width: "200px", marginLeft: "270px" }} />  <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5 > */















{/* <div className={styles.mainPrising}>
                            <table style={{ width: "496.375px" }} className={styles.tables1}>
                                <tbody>
                                    <tr style={{ height: "23px" }}>
                                        <td style={{ width: "129px", height: "23px" }}>Основные услуги:</td>
                                        <td style={{ width: "165px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div></td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div></td>
                                    </tr>
                                    <tr style={{ height: "23px;" }}>
                                        <td style={{ width: "129px", height: "23px" }}><div>&nbsp;</div></td>
                                        <td style={{ width: "165px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div></td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div></td>
                                    </tr>
                                    <tr style={{ height: "23px;" }}>
                                        <td style={{ width: "129px", height: "23px" }}><div>&nbsp;</div>Стрижка мужская</td>
                                        <td style={{ width: "165px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div>________________________</td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div>  5000тг</td>
                                    </tr>
                                    <tr style={{ height: "23px;" }}>
                                        <td style={{ width: "129px", height: "23px" }}><div>&nbsp;</div>Стрижка детская</td>
                                        <td style={{ width: "165px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div>________________________</td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div>  5000тг</td>
                                    </tr>
                                    <tr style={{ height: "23.5px;" }}>
                                        <td style={{ width: "199px", height: "23.5px" }}><div>&nbsp;</div>Стрижка бороды</td>
                                        <td style={{ width: "165px", height: "23.5px;" }}><div>&nbsp;</div>________________________</td>
                                        <td style={{ width: "127.375px", height: "23.5px;" }}><div>&nbsp;</div>  5000тг</td>
                                    </tr>
                                    <tr style={{ height: "23px;" }}>
                                        <td style={{ width: "129px", height: "23px" }}><div>&nbsp;</div>Королевское бритье</td>
                                        <td style={{ width: "115px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div>________________________</td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div>  5000тг</td>
                                    </tr>
                                    <tr style={{ height: "23px;" }}>
                                        <td style={{ width: "129px", height: "23px" }}><div>&nbsp;</div>Классическое бритье</td>
                                        <td style={{ width: "115px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div>________________________</td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div>  5000тг</td>
                                    </tr>
                                    <tr style={{ height: "23px;" }}>
                                        <td style={{ width: "129px", height: "23px" }}><div>&nbsp;</div>Стрижка машинкой</td>
                                        <td style={{ width: "165px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div>________________________</td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div>  5000тг</td>
                                    </tr>
                                    <tr style={{ height: "23px;" }}>
                                        <td style={{ width: "129px", height: "23px" }}><div>&nbsp;</div></td>
                                        <td style={{ width: "165px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div></td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div></td>
                                    </tr>
                                    <tr style={{ height: "23px;" }}>
                                        <td style={{ width: "299px", height: "23px" }}><div>&nbsp;</div>Комплексные услуги</td>
                                        <td style={{ width: "165px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div></td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div></td>
                                    </tr>
                                    <tr style={{ height: "23px;" }}>
                                        <td style={{ width: "129px", height: "23px" }}><div>&nbsp;</div>Отец+Сын</td>
                                        <td style={{ width: "165px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div>________________________</td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div>  5000тг</td>
                                    </tr>
                                    <tr style={{ height: "23px;" }}>
                                        <td style={{ width: "129px", height: "23px" }}><div>&nbsp;</div>Друг+Друг</td>
                                        <td style={{ width: "165px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div>________________________</td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div>  5000тг</td>
                                    </tr>
                                    <tr style={{ height: "23px;" }}>
                                        <td style={{ width: "129px", height: "23px" }}><div>&nbsp;</div>Стрижка+борода</td>
                                        <td style={{ width: "165px", height: "23px", paddingLeft: "-150px" }}><div>&nbsp;</div>________________________</td>
                                        <td style={{ width: "127.375px", height: "23px" }}><div>&nbsp;</div>  5000тг</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div > */}
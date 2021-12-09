import React from 'react'
import styles from './HomePage.module.css'
import Slides from '../../Components/Carousel/Slides'
import Navbar from '../../Components/Navbar/Navbar'
import MainPage from '../MainPage/MainPage'
import AboutMachete from '../AboutMachete/AboutMachete'
import Advantages from '../Advantages/Advantages'
import PriceList from '../PriceList/PriceList'
import MapSlides from '../../Components/MapSlides/MapSlides'
import Footer from '../../Components/Footer/Footer'
import photo1 from '../../media/1.png'
import photo2 from '../../media/2.png'
import photo3 from '../../media/3.png'
import photo4 from '../../media/4.png'
import photo5 from '../../media/5.png'
// import icon1 from '../../Icons/1.png'
// import icon2 from '../../Icons/2.png'
// import icon3 from '../../Icons/3.png'
// import icon4 from '../../Icons/4.png'
// import icon5 from '../../Icons/5.png'
// import icon6 from '../../Icons/6.png'
const HomePage = () => {
    return (
        <>

            <MainPage />

            <AboutMachete />

            <Advantages />

            <PriceList />

            <MapSlides />

            <Slides />

            <Footer />

        </>
    )
}
export default HomePage;

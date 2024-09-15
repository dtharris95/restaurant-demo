import React, { useEffect, useState } from 'react'
import '../App.css'
import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import lasagna from '../img/lasagna.jpg'
import ribeye from '../img/ribeye.jpg'
import veggieburger from '../img/veggieburger.jpg'
import happyHourimg from '../img/happyHourimg.jpg'
import columbusSkylineBanner from '../img/columbusSkylineBanner.jpg'
import HKTBrandLogo from '../img/HKTBrandLogo.jpg'
import pb from '../lib/pocketbase'

function Home() {
  // CHANGE HEADINGONE TO WELCOME!, ETC. DOWN THE LINE
  const [welcome, setWelcome] = useState([]);
  const [specials, setSpecials] = useState([]);
  const [aboutUs, setAboutUs] = useState([]);
  const [commitment, setCommitment] = useState([]);
  const [happyHour, setHappyHour] = useState([]);
  const [diningSpecial, setDiningSpecial] = useState([]);
  const [drinkSpecial, setDrinkSpecial] = useState([]);

const getWelcome = () => {
  pb
  .collection('homepage')
  .getOne('9g91ompkk1zx4oy')
  .then((res) => setWelcome(res));
}
useEffect(() => {
  getWelcome();
}, []);

const getSpecials = () => {
  pb
  .collection('homepage')
  .getOne('mm6rxy5u0ru7z12')
  .then((res) => setSpecials(res));
}
useEffect(() => {
  getSpecials();
}, []);

const getAboutUs = () => {
  pb
  .collection('homepage')
  .getOne('iog8qkbhezablun')
  .then((res) => setAboutUs(res));
}
useEffect(() => {
  getAboutUs();
}, []);

const getCommitment = () => {
  pb
  .collection('homepage')
  .getOne('8muw5x8pfbwblol')
  .then((res) => setCommitment(res));
}
useEffect(() => {
  getCommitment();
}, []);

const getHappyHour = () => {
  pb
  .collection('homepage')
  .getOne('hsumpj5pl4ry2an')
  .then((res) => setHappyHour(res));
}
useEffect(() => {
  getHappyHour();
}, []);

const getDiningSpecial = () => {
  pb
  .collection('homepage')
  .getOne('ljdek4jiv0zvaux')
  .then((res) => setDiningSpecial(res));
}
useEffect(() => {
  getDiningSpecial();
}, []);

const getDrinkSpecial = () => {
  pb
  .collection('homepage')
  .getOne('mpawknz7kb2xy4m')
  .then((res) => setDrinkSpecial(res));
}
useEffect(() => {
  getDrinkSpecial();
}, []);
  
  return (
    <>
      <div className='main-container'>
        <div className='flex-container'>
          <h1 className='card-tab'>{welcome.mainHeading}</h1>
        </div>
        
        <div className='carousel-container'>
          <Splide aria-label="My Favorite Images">
            <SplideSlide>
              <img src={lasagna} alt="Lasagna"/>
            </SplideSlide>
            <SplideSlide>
              <img src={ribeye} alt="Image 2"/>
            </SplideSlide>
            <SplideSlide>
              <img src={veggieburger} alt="Image 3"/>
            </SplideSlide>
          </Splide>
        </div>

          <div className='flex-container'>
          <div className='story-container'>
            <h1 className='page-subtitles'>{aboutUs.subHeadings}</h1>
            {/* ADD PADDING UNDER BELOW PARAGRAPH */}
            <h2 className='home-paragraph'>{aboutUs.description}
              
            </h2>
            <img className='home-image' src={HKTBrandLogo}></img>
            <h1 className='page-subtitles'>{commitment.subHeadings}</h1>
            {/* ADD PADDING UNDER BELOW PARAGRAPH */}
            <h2 className='home-paragraph'>{commitment.description}</h2>

            <img className='home-image' alt='Columbus Skyline' src={columbusSkylineBanner}></img>
          </div>
        </div>

        <div className='flex-container'>
          <h1 className='card-tab'>{specials.mainHeading}</h1>
        </div>

        <div className='flex-container'>
            <div className='specials-container'>
              <img className='happy-hour-image' alt='Happy Hour' src={happyHourimg}></img>
              <h1 className='page-subtitles'>{happyHour.subHeadings}</h1>
              <h1 className='home-text'>{diningSpecial.subHeadings}</h1>
              <h2>{diningSpecial.description}</h2>
              <h1 className='home-text'>{drinkSpecial.subHeadings}</h1>
              <h2>{drinkSpecial.description}</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
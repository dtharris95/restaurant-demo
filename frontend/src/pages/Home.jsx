import React, { useEffect, useState } from 'react'
import '../App.css'
import lasagna from '../img/lasagna.jpg'
import happyHourimg from '../img/happyHourimg.jpg'
import columbusSkylineBanner from '../img/columbusSkylineBanner.jpg'
import HKTBrandLogo from '../img/HKTBrandLogo.jpg'
import pb from '../lib/pocketbase'

// LOOK TO CONDENSE CODE, USE LESS SPACING BY USING GETFULL LIST LIKE ON MENU.JSX

function Home() {
  // CHANGE HEADINGONE TO WELCOME!, ETC. DOWN THE LINE
  const [headingOne, setHeadingOne] = useState([]);
  const [headingTwo, setHeadingTwo] = useState([]);
  const [aboutUs, setAboutUs] = useState([]);
  const [commitment, setCommitment] = useState([]);
  const [happyHour, setHappyHour] = useState([]);
  const [aboutUsText, setAboutUsText] = useState([]);
  const [commitmentText, setCommitmentText] = useState([]);
  const [diningSpecial, setDiningSpecial] = useState([]);
  const [diningSpecialText, setDiningSpecialText] = useState([]);
  const [drinkSpecial, setDrinkSpecial] = useState([]);
  const [drinkSpecialText, setDrinkSpecialText] = useState([]);
  const [drinkSpecialTextTwo, setDrinkSpecialTextTwo] = useState([]);

const getHeadingOne = () => {
  pb
  .collection('page_headings')
  .getOne('me2bix1hhwv522k')
  .then((res) => setHeadingOne(res));
}
useEffect(() => {
  getHeadingOne();
}, []);

const getHeadingTwo = () => {
  pb
  .collection('page_headings')
  .getOne('xigk2axgzb5fnki')
  .then((res) => setHeadingTwo(res));
}
useEffect(() => {
  getHeadingTwo();
}, []);

const getAboutUs = () => {
  pb
  .collection('home_subheaders')
  .getOne('4ptk8k1e1id3oqi')
  .then((res) => setAboutUs(res));
}
useEffect(() => {
  getAboutUs();
}, {});

const getCommitment = () => {
  pb
  .collection('home_subheaders')
  .getOne('eo602swcx83ebsk')
  .then((res) => setCommitment(res));
}
useEffect(() => {
  getCommitment();
}, {});

const getHappyHour = () => {
  pb
  .collection('home_subheaders')
  .getOne('zg0bqpbg0h8v6ak')
  .then((res) => setHappyHour(res));
}
useEffect(() => {
  getHappyHour();
}, {});

const getAboutUsText = () => {
  pb
  .collection('homepage_text')
  .getOne('vc5bw5upx6nobpf')
  .then((res) => setAboutUsText(res));
}
useEffect(() => {
  getAboutUsText();
}, {});

const getCommitmentText = () => {
  pb
  .collection('homepage_text')
  .getOne('shigny4xlj3nbwm')
  .then((res) => setCommitmentText(res));
}
useEffect(() => {
  getCommitmentText();
}, {});

const getDiningSpecial = () => {
  pb
  .collection('homepage_text')
  .getOne('3ne6agjitjxk50j')
  .then((res) => setDiningSpecial(res));
}
useEffect(() => {
  getDiningSpecial();
}, {});

const getDiningSpecialText = () => {
  pb
  .collection('homepage_text')
  .getOne('boi6xk8deagfaam')
  .then((res) => setDiningSpecialText(res));
}
useEffect(() => {
  getDiningSpecialText();
}, {});

const getDrinkSpecial = () => {
  pb
  .collection('homepage_text')
  .getOne('xkqpkx2ujj9qu2d')
  .then((res) => setDrinkSpecial(res));
}
useEffect(() => {
  getDrinkSpecial();
}, {});

const getDrinkSpecialText = () => {
  pb
  .collection('homepage_text')
  .getOne('o2v43uqsgqi080d')
  .then((res) => setDrinkSpecialText(res));
}
useEffect(() => {
  getDrinkSpecialText();
}, {});

const getDrinkSpecialTextTwo = () => {
  pb
  .collection('homepage_text')
  .getOne('y28qe7zdkvz4z8d')
  .then((res) => setDrinkSpecialTextTwo(res));
}
useEffect(() => {
  getDrinkSpecialTextTwo();
}, {});
  
  return (
    <>
      <div className='main-container'>
        <div className='flex-container'>
          <h1 className='card-tab'>{headingOne.headingName}</h1>
        </div>

        <div className='flex-container'>
          <img className='lasagna-image' alt='Lasagna' src={lasagna}></img>
        </div>

          <div className='flex-container'>
          <div className='story-container'>
            <h1 className='page-subtitles'>{aboutUs.headingName}</h1>
            <h2 className='home-paragraph'>{aboutUsText.homeParagraph}<br></br> 
              {/* <h3 className='bolder'>Harris Kitchen Table.</h3> */}
              <img className='home-image' src={HKTBrandLogo}></img>
              </h2>
            <h1 className='page-subtitles'>{commitment.headingName}</h1>
            <h2 className='home-paragraph'>{commitmentText.homeParagraph}</h2><br></br>

            <img className='home-image' alt='Columbus Skyline' src={columbusSkylineBanner}></img>
          </div>
        </div>

        <div className='flex-container'>
          <h1 className='card-tab'>{headingTwo.headingName}</h1>
        </div>

        <div className='flex-container'>
            <div className='specials-container'>
              <img className='happy-hour-image' alt='Happy Hour' src={happyHourimg}></img>
              <h1 className='page-subtitles'>{happyHour.headingName}</h1>
              <h1></h1>
              <h1 className='home-text'>{diningSpecial.homeParagraph}</h1>
              <h2>{diningSpecialText.homeParagraph}</h2>
              <h2></h2>
              <h1 className='home-text'>{drinkSpecial.homeParagraph}</h1>
              <h2>{drinkSpecialText.homeParagraph}</h2>
              <h2>{drinkSpecialTextTwo.homeParagraph}</h2>
              <h2></h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
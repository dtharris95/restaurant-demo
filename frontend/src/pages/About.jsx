import React from 'react'
import '../App.css'
import columbusSkylineBanner from '../img/columbusSkylineBanner.jpg'

function About() {

  return (
    <>
    <div className='main-container'>
      <div className='flex-container'>
            <h1 className='card-tab'>Our Story</h1>
      </div>

      <div className='flex-container'>
        <div className='story'>
          <h1 className='page-subtitles'>About Us</h1>
          <h2 className='home-paragraph'>The inspiration behind this website comes from my older brother, Domini. After falling in love with cooking at 8 years old, he went on to become a certified chef, now boasting 18 years' experience working in various culinary environments, including fine-dining, catering and fast-food restaurants. His dream is to one day open his own diner under the name: Harris Kitchen Table.</h2>
          <h1 className='page-subtitles'>Our Commitment</h1>
          <h2>In his words, "Detail towards execution for the customer matters. Perfection for every setup and plate matters." Regardless of which dining experience he is working in, he believes in doing it to the highest standard every single time and exceeding customer expectations. </h2>

          <img className='testing' alt='Columbus Skyline' src={columbusSkylineBanner} width='550px' height='75%'></img>
        </div>
      </div>

      {/* <div className='flex-container'>
        <div className='image-container'>
          <img className='' alt='Columbus Skyline' src={columbusSkylineBanner}></img>
        </div>
      </div> */}
    </div>
    </>
  )
}

export default About
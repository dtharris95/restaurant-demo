import React from 'react'
import '../App.css'
import happyHour from '../img/happyHour.jpg'
import columbusSkylineBanner from '../img/columbusSkylineBanner.jpg'

function Home() {
  return (
    <>
      <div className='main-container'>
        <div className='flex-container'>
          <h1 className='card-tab'>Welcome!</h1>
        </div>

          <div className='flex-container'>
          <div className='story'>
            <h1 className='page-subtitles'>About Us</h1>
            <h2 className='home-paragraph'>The inspiration behind this website comes from my older brother, Domini. After falling in love with cooking at 8 years old, he went on to become a certified chef, now boasting 18 years' experience working in various culinary environments, including fine-dining, catering and fast-food restaurants. His dream is to one day open his own diner under the name: <h3 className='bolder'>Harris Kitchen Table.</h3></h2>
            <h1 className='page-subtitles'>Our Commitment</h1>
            <h2 className='home-paragraph'>In his words, "Detail towards execution for the customer matters. Perfection for every setup and plate matters." Regardless of which dining experience he is working in, he believes in doing it to the highest standard every single time and exceeding customer expectations. </h2>

            <img className='home-image' alt='Columbus Skyline' src={columbusSkylineBanner} width='550px' height='75%'></img>
          </div>
        </div>

        <div className='flex-container'>
          <h1 className='card-tab'>Specials</h1>
        </div>

        <div className='flex-container'>
            <div className='specials'>
              <h1 className='page-subtitles'>Happy Hour (4-7pm)</h1>
              <h1 className='home-text'>Dining Specials</h1>
              <h2>Half off appetizers Thursdays from 3-6pm!</h2>
              <h2></h2>
              <h1 className='home-text'>Drink Specials</h1>
              <h2>Bud Light, Coors Light, Miller Lite: $2.00</h2>
              <h2>Corona, Blue Moon, Angry Orchard: $2.50</h2>
              <h2></h2>
              <img className='' alt='Happy Hour' src={happyHour}></img>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
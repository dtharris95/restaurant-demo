import React from 'react'
import '../App.css'
// import Slideshow from '../components/Slideshow'

function Home() {

  return (
    <>
    <div className='flex-container'>
        {/* <div className='main-container'>
          <h1 className='card-tab'>Restaurant</h1>
        </div> */}

        {/* <div className='main-container'> */}
          <h1 className='card-tab'>
            Specials
          </h1>
        {/* </div> */}
      </div>

        {/* <>
          <Slideshow />
        </> */}

        <div className='flex-container'>
          <div className='specials'>
            <h1 className='page-subtitles'>Happy Hour (4-7pm)</h1>
            <h1 className='home-text'>Entree Specials</h1>
            <h2></h2>
            <h2></h2>
            <h1 className='home-text'>Drink Specials</h1>
            <h2>Bud Light, Coors Light, Miller Lite: $2.00</h2>
          </div>
        </div>
    </>
  )
}

export default Home

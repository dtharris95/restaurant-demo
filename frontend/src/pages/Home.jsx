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
            <h1>Insert Specials Here</h1>
          </div>
        </div>
    </>
  )
}

export default Home

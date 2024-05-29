import React from 'react'
import '../App.css'
import happyHour from '../img/happyHour.jpg'

function Specials() {
  return (
    <>
      <div className='main-container'>
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

export default Specials

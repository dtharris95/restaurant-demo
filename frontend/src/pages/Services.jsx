import React from 'react'
import '../App.css'
import cookingset from '../img/cookingset.jpg'
import columbusSkylineBanner from '../img/columbusSkylineBanner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faBowlFood, faKitchenSet, faShieldHeart, faUtensils } from '@fortawesome/free-solid-svg-icons'

function Services() {

  return (
    <>
    <div className='main-container'>
      <div className='flex-container'>
            <h1 className='card-tab'>Services</h1>
      </div>

      <div className='flex-container'>
          <img className='cooking-image' alt='Cooking Set' src={cookingset}></img>
      </div>

      <div className='flex-container'>
        <div className='services-container'>
          <h1 className='page-subtitles-services'>Personal Chef
              <FontAwesomeIcon className='icons-services'  icon={faKitchenSet}/>
          </h1>
          <h2 className='services-description'>Consultation Available</h2>

          <h1 className='page-subtitles'>Meal Prep
              <FontAwesomeIcon className='icons' icon={faUtensils} />
          </h1>
          <h2 className='services-description'>Weekly Meal Preps (5-Day & 7-Day)</h2>

          <h1 className='page-subtitles'>Catering
              <FontAwesomeIcon className='icons' icon={faBowlFood} />
          </h1>
          <h2 className='services-description'>Lunches | Engagements | Weddings | Birthdays <br></br> Baby Showers | Graduations | Anniversaries</h2>

          {/* <h1 className='page-subtitles-services'>ServSafe Instructor
              <FontAwesomeIcon className='icons-services' icon={faShieldHeart} />
          </h1>
          <h2 className='services-description'>Serv-Safe Certified</h2> */}
          
          <h1 className='page-subtitles-services'>Cooking Classes
              <FontAwesomeIcon className='icons-services' icon={faBookOpen} />
          </h1>
          <h2 className='services-description'>Different Level Classes Available: <br></br> Beginner | Intermediate | Expert <br></br> ServSafe Certified</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
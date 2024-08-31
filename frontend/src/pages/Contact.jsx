import React from 'react'
import '../App.css'
import contactus from '../img/contactus.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <>
    <div className='main-container'>
      <div className='flex-container'>
        {/* <div className='main-container'> */}
          <h1 className='card-tab'>Contact</h1>
        {/* </div> */}
      </div>

      {/* <div className='flex-container'>
          <img className='' alt='Contact Us Image' src={contactus}></img>
      </div> */}

      <div className='flex-container'>
        <div className='contact-container'>
            <h2 className='page-subtitles'>Phone
              <FontAwesomeIcon className='icons' icon={faPhone} /></h2>
            <p className='contact-text'>614-555-0102</p>
            <h2 className='page-subtitles'>Email
              <FontAwesomeIcon className='icons' icon={faEnvelope} /></h2>
            <p className='contact-text'>restaurant@demo.com</p>
            <h2 className='page-subtitles'>Location
              <FontAwesomeIcon className='icons' icon={faLocationDot} /></h2>
            <p className='contact-text'> 123 Address Avenue<br></br>Columbus, OH 43214</p>
            <h2 className='page-subtitles'>Hours
              <FontAwesomeIcon className='icons' icon={faClock} /></h2>
            <p className='contact-text'>Mon-Fri: 11a - 9p<br></br>Sat-Sun: 11a - 11p</p>
        </div>
      </div>

        {/* Embedded Google Maps */}
        <div className='flex-container'>
          <div className='map-container'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50657.81662060361!2d-81.73197107276215!3d41.495323366621946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef2ee3686b2d%3A0xed04cb55f7621842!2sCleveland%2C%20OH!5e0!3m2!1sen!2sus!4v1713043701164!5m2!1sen!2sus" width="600" height="550"></iframe>  
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

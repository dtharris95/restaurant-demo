import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import pb from '../lib/pocketbase'

function Menu() {
  const [entree, setEntree] = useState('');
  const getEntree = () => {
    pb
    .collection('entrees')
    .getFullList()
    .then((response) => setEntree(response[0]));
  }
  useEffect(() => {
    getEntree();
  }, []);

  return (
    <>
    <div className='main-container'>
      <div className='flex-container'>
          <h1 className='card-tab'>Menu</h1>
      </div>
      
      <div className='flex-container'>
      {/* Appetizers Section */}
      <div className='menu-container'>
        <div className='menu-title-container'>
          <h1 className='page-subtitles'>Appetizers</h1>
        </div>
        <br></br>
        <div className='menu-rows-container'>
          <div className='menu-flex-container'>
              <div className='column'>
                <h2 className='entree-items'>{entree.entreeName}</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>App #2</h2>
                <p></p>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>App #3</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
          </div>
          <div className='menu-flex-container'>
              <div className='column'>
                <h2 className='entree-items'>App #4</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>App #5</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>App #6</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
        </div>
      {/* <hr></hr> */}

{/* Entrees Section */}
        <div className='menu-title-container'>
            <h1 className='page-subtitles'>Entrees</h1>
        </div>
        <br></br>
        <div className='menu-rows-container'>
          <div className='menu-flex-container'>
              <div className='column'>
                <h2 className='entree-items'>Entree #1</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Entree #2</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Entree #3</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
          </div>
          <div className='menu-flex-container'>
              <div className='column'>
                <h2 className='entree-items'>Entree #4</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Entree #5</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Entree #6</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
        </div>
      {/* <hr></hr> */}

      {/* Sides section */}
        <div className='menu-title-container'>
          <h1 className='page-subtitles'>Sides</h1>
        </div>
        <br></br>
        <div className='menu-rows-container'>
          <div className='menu-flex-container'>
              <div className='column'>
                <h2 className='side-items'>Side #1</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='side-items'>Side #2</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='side-items'>Side #3</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
          </div>
          <div className='menu-flex-container'>
              <div className='column'>
                <h2 className='side-items'>Side #4</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='side-items'>Side #5</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className='column'>
                <h2 className='side-items'>Side #6</h2>
                <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
          </div>
        </div>
      {/* <hr></hr> */}

      {/* Drinks */}
        <div className='menu-title-container'>
          <h1 className='page-subtitles'>Drinks</h1>
        </div>
        <br></br>
        <div className='menu-rows-container'>
        <div className='menu-flex-container'>
              <div className='drink-column'>
                <h2 className='drink-items'>Drink #1</h2>
                <p className='menu-descriptions'>$2.30</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Drink #2</h2>
                <p className='menu-descriptions'>$2.50</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Drink #3</h2>
                <p className='menu-descriptions'>$2.30</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Drink #4</h2>
                <p className='menu-descriptions'>$2.15</p>
              </div>
          </div>
          <div className='menu-flex-container'>
              <div className='drink-column'>
                <h2 className='drink-items'>Drink #5</h2>
                <p className='menu-descriptions'>$2.50</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Drink #6</h2>
                <p className='menu-descriptions'>$1.75</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Drink #7</h2>
                <p className='menu-descriptions'>$1.90</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Drink #8</h2>
                <p className='menu-descriptions'>$2.95</p>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='main-container'></div>
    </>
  )
}

export default Menu

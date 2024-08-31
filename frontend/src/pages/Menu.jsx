import React, { useEffect, useState } from 'react'
import '../App.css'
import { useParams, Link } from 'react-router-dom'
import pb from '../lib/pocketbase'

function Menu() {
  const [appetizer, setAppetizer] = useState([]);
  const [entree, setEntree] = useState([]);
  const [side, setSide] = useState([]);
  const [drink, setDrink] = useState([]);

  const getAppetizer = () => {
    pb
    .collection('appetizers')
    .getFullList()
    .then((res) => setAppetizer(res));
  }
  useEffect(() => {
    getAppetizer();
  }, []);

  const getEntree = () => {
    pb
    .collection('entrees')
    .getFullList()
    .then((res) => setEntree(res));
  }
  useEffect(() => {
    getEntree();
  }, []);

  const getSide = () => {
    pb
    .collection('sides')
    .getFullList()
    .then((res) => setSide(res));
  }
  useEffect(() => {
    getSide();
  }, []);

  const getDrink = () => {
    pb
    .collection('drinks')
    .getFullList()
    .then((res) => setDrink(res));
  }
  useEffect(() => {
    getDrink();
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
                {appetizer.map((appItem) => (
                  <>
                    <h2 className='appetizer-items'>{appItem.appName}</h2>
                    <p className='menu-descriptions'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </>
              ))}
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
                {/* ADD UNIQUE KEY PROPS FOR EACH CHILD ELEMENT -H2 AND P ELEMENTS */}
                {entree.map((entreeItem) => (
                  <>
                    <h2 className='entree-items'>{entreeItem.entreeName}</h2>
                    <p className='menu-descriptions'>{entreeItem.description}</p>
                  </>
                ))}
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
                {/* ADD UNIQUE KEY PROPS FOR EACH CHILD ELEMENT -H2 AND P ELEMENTS */}
                {side.map((sideItem) => (
                  <>
                    <h2 className='side-items'>{sideItem.sideName}</h2>
                    <p className='menu-descriptions'>{sideItem.description}</p>
                  </>
                ))}
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
                {drink.map((drinkItem) => (
                  <>
                    <h2 className='drink-items'>{drinkItem.drinkName}</h2>
                    <p className='menu-descriptions'>{drinkItem.description}</p>
                  </>
                ))}
              </div>
          </div>
          <div className='menu-flex-container'>
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

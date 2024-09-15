import React, { useEffect, useState } from 'react'
import '../App.css'
import { useParams, Link } from 'react-router-dom'
import pb from '../lib/pocketbase'
import wings from '../img/wings.jpeg'
import salmon from '../img/salmon.webp'
import caesarsalad from '../img/caesarsalad.jpg'

function Menu() {
  const [menuHeading, setMenuHeading] = useState('');
  const [appetizer, setAppetizer] = useState([]);
  const [entree, setEntree] = useState([]);
  const [side, setSide] = useState([]);
  const [drink, setDrink] = useState([]);
  const [alcohol, setAlcohol] = useState([]);
  const [appHeading, setAppHeading] = useState([]);
  const [entreeHeading, setEntreeHeading] = useState([]);
  const [sideHeading, setSideHeading] = useState([]);
  const [drinkHeading, setDrinkHeading] = useState([]);

  const getMenuHeading = () => {
    pb
    .collection('menu_headers')
    .getOne('7ulelsdrvltiiif')
    .then((res) => setMenuHeading(res))
  }
  useEffect(() => {
    getMenuHeading();
  }, []);

  const getAppHeading = () => {
    pb
    .collection('menu_headers')
    .getOne('ksdriukihwdmipy')
    .then((res) => setAppHeading(res))
  }
  useEffect(() => {
    getAppHeading();
  }, []);
  
  const getAppetizer = () => {
    pb
    .collection('menu_appetizers')
    .getFullList()
    .then((res) => setAppetizer(res));
  }
  useEffect(() => {
    getAppetizer();
  }, []);

  const getEntreeHeading = () => {
    pb
    .collection('menu_headers')
    .getOne('dyzgitio4w26a9h')
    .then((res) => setEntreeHeading(res))
  }
  useEffect(() => {
    getEntreeHeading();
  }, []);

  const getEntree = () => {
    pb
    .collection('menu_entrees')
    .getFullList()
    .then((res) => setEntree(res));
  }
  useEffect(() => {
    getEntree();
  }, []);

  const getSide = () => {
    pb
    .collection('menu_sides')
    .getFullList()
    .then((res) => setSide(res));
  }
  useEffect(() => {
    getSide();
  }, []);

  const getDrink = () => {
    pb
    .collection('menu_softDrinks')
    .getFullList()
    .then((res) => setDrink(res));
  }
  useEffect(() => {
    getDrink();
  }, []);

  const getAlcohol = () => {
    pb
    .collection('menu_alcohol')
    .getFullList()
    .then((res) => setAlcohol(res));
  }
  useEffect(() => {
    getAlcohol();
  }, []);
  
  const getSideHeading = () => {
    pb
    .collection('menu_headers')
    .getOne('q7awuja0sloe88v')
    .then((res) => setSideHeading(res))
  }
  useEffect(() => {
    getSideHeading();
  }, []);

  const getDrinkHeading = () => {
    pb
    .collection('menu_headers')
    .getOne('nqqbgu3f7zw378g')
    .then((res) => setDrinkHeading(res))
  }
  useEffect(() => {
    getDrinkHeading();
  }, []);

  return (
    <>
    <div className='main-container'>
      <div className='flex-container'>
          <h1 className='card-tab'>{menuHeading.mainHeading}</h1>
      </div>
      
      <div className='flex-container'>
      <div className='menu-container'>
        {/* Appetizers Section */}
        <div className='menu-title-container'>
          {/* <img className='menu-images'src={wings} ></img> */}
          <h1 className='page-subtitles'>{appHeading.headingName}</h1>
        </div>
        <div className='menu-rows-container'>
          <div className='menu-flex-container'>
              <div className='column'>
                {appetizer.map((appItem) => (
                  <>
                    <h2 className='appetizer-items'>{appItem.appName}</h2>
                    <p className='menu-descriptions'>{appItem.description}</p>
                  </>
              ))}
              </div>
            </div>
        </div>

        {/* Entrees Section */}
        <div className='menu-title-container'>
            {/* <img className='menu-images'src={salmon} ></img> */}
            <h1 className='page-subtitles'>{entreeHeading.headingName}</h1>
        </div>
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

        {/* Sides section */}
        <div className='menu-title-container'>
          {/* <img className='menu-images'src={caesarsalad} ></img> */}
          <h1 className='page-subtitles'>{sideHeading.headingName}</h1>
        </div>
        <div className='menu-rows-container'>
          <div className='menu-flex-container'>
              <div className='column'>
                {/* ADD UNIQUE KEY PROPS FOR EACH CHILD ELEMENT -H2 AND P ELEMENTS */}
                {side.map((sideItem) => (
                  <>
                    <h2 className='side-items' key={sideItem.id}>{sideItem.sideName}</h2>
                    <p className='menu-descriptions'>{sideItem.description}</p>
                  </>
                ))}
              </div>
          </div>
        </div>

        {/* Drinks */}
        <div className='menu-title-container'>
          <h1 className='page-subtitles'>{drinkHeading.headingName}</h1>
        </div>
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
              <div className='drink-column'>
                {alcohol.map((alcoholItem) => (
                  <>
                    <h2 className='drink-items'>{alcoholItem.alcoholName}</h2>
                    <p className='menu-descriptions'>{alcoholItem.description}</p>
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

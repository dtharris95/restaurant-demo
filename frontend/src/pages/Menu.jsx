import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Menu() {
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
                <h2 className='entree-items'>Mac & Cheese Bites</h2>
                <p className='menu-descriptions'>$7.15</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Mozzarella Sticks</h2>
                <p></p>
                <p className='menu-descriptions'>$8.25</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Cheese Bites</h2>
                <p className='menu-descriptions'>$6.50</p>
              </div>
          </div>
          <div className='menu-flex-container'>
              <div className='column'>
                <h2 className='entree-items'>Crab Rangoon</h2>
                <p className='menu-descriptions'>$8.15</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Chips & Guacamole</h2>
                <p className='menu-descriptions'>$6.75</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Salad</h2>
                <p className='menu-descriptions'>Caesar, Cobb or Caprese. $8.15</p>
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
                <h2 className='entree-items'>Ribeye Steak</h2>
                <p className='menu-descriptions'>Bone-in, prime ribeye, 18 or 22 oz. $24.95</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Chicken Alfredo</h2>
                <p className='menu-descriptions'>Topped off with parmesan cheese and parsley garnish. $22.50</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Glazed Salmon</h2>
                <p className='menu-descriptions'>Covered in honey, soy sauce, lemon juice and red pepper flakes. Garnished with sliced lemon. $19.95</p>
              </div>
          </div>
          <div className='menu-flex-container'>
              <div className='column'>
                <h2 className='entree-items'>Lasagna</h2>
                <p className='menu-descriptions'>Mozarella slices, parmesan cheese, and meat sauce. $20.95</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Lamb Chops</h2>
                <p className='menu-descriptions'>Oven-roasted, marinated in rosemary, lemon, garlic and olive oil. $23.75</p>
              </div>
              <div className='column'>
                <h2 className='entree-items'>Veggie Burger</h2>
                <p className='menu-descriptions'>Black beans, rice, carrots, green onions and breadcrumbs. $17.50</p>
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
                <h2 className='side-items'>Mac & Cheese</h2>
                <p className='menu-descriptions'>Optional: add bacon bits. $3.99</p>
              </div>
              <div className='column'>
                <h2 className='side-items'>Mashed Potatoes</h2>
                <p className='menu-descriptions'>Optional: add gravy or cheese. $2.99</p>
              </div>
              <div className='column'>
                <h2 className='side-items'>Green Beans</h2>
                <p className='menu-descriptions'>Optional: add bacon bits. $2.50</p>
              </div>
          </div>
          <div className='menu-flex-container'>
              <div className='column'>
                <h2 className='side-items'>Onion Rings</h2>
                <p className='menu-descriptions'>$4.15</p>
              </div>
              <div className='column'>
                <h2 className='side-items'>Broccoli</h2>
                <p className='menu-descriptions'>$5.45</p>
              </div>
              <div className='column'>
                <h2 className='side-items'>Seasoned Fries</h2>
                <p className='menu-descriptions'>$3.15</p>
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
                <h2 className='drink-items'>Coca-Cola</h2>
                <p className='menu-descriptions'>$2.30</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Diet Coke</h2>
                <p className='menu-descriptions'>$2.50</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Sprite</h2>
                <p className='menu-descriptions'>$2.30</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Fanta</h2>
                <p className='menu-descriptions'>$2.15</p>
              </div>
          </div>
          <div className='menu-flex-container'>
              <div className='drink-column'>
                <h2 className='drink-items'>Hi-C</h2>
                <p className='menu-descriptions'>$2.50</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Minute Maid</h2>
                <p className='menu-descriptions'>$1.75</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Tea</h2>
                <p className='menu-descriptions'>$1.90</p>
                <p className='menu-descriptions'>(sweetened or unsweetened)</p>
              </div>
              <div className='drink-column'>
                <h2 className='drink-items'>Beer</h2>
                <p className='menu-descriptions'>Bud Light, Coors Light, Miller Lite ($2.95)</p>
                <p className='menu-descriptions'>Corona, Blue Moon, Angry Orchard ($3.25)</p>
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

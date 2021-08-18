import React from 'react'
import covid from '../Images/COVID-19.jpg'


const Header = () => {
return (
        <div className="app__header">
          <div className="app__header__image">
            <img src={covid}></img>
          </div>
        <h3>Covid 19 Tracker</h3>
      </div>
    )
}

export default Header

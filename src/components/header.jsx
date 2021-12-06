import React from 'react'
import logo from '../assets/img/Animal_Crossing_Leaf.png'
import '../style/main.css'

const Header = (props) => {
  return (
    <header className="header-container">
      <img className="logo" src={logo} alt="logo" />
      <h1 className="title">My Dairy</h1>
    </header>
  )
}

export default Header

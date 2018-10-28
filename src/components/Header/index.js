import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from 'static/images/III.svg'

const Header = ({ text }) => (
  <header className='navbar bg-light' styleName="header">
    <div className="container d-flex justify-content-start align-items-center">
      <Link className='navbar-brand p-0' styleName='brand' to='/'>
        <img className='img-responsive' src={logo} />
      </Link>
      <ul className='navbar-nav d-flex flex-row'>
        <li className='nav-item'>
          <Link className='nav-link pt-2 mx-3' styleName="link" to='/'>Dashboard</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link pt-2 mx-3' styleName="link" to='/prediction'>Prediction</Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header

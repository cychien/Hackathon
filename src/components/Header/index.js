import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from 'static/images/ako-icon.svg'

const Header = ({ text }) => (
  <header className='navbar nav-bar-border navbar-expand navbar-dark bg-dark flex-column flex-md-row'>
    <Link className='navbar-brand mr-0 mr-md-2' styleName='brand' to='/' aria-label='Akohub'>
      <img className='img-responsive' src={logo} />
    </Link>
    <div className='navbar-nav-scroll'>
      <ul className='navbar-nav bd-navbar-nav flex-row'>
        <li className='nav-item'>
          <Link className='nav-link' to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header

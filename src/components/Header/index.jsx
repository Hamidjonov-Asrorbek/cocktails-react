import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
            <nav className="navbar">
                <div className="nav-center">
                    <Link to="/"
                        ><img
                            src="/logo.svg"
                            alt="cocktail db logo"
                            className="logo"
                    /></Link>
                    <ul className="nav-links">
                        <li><NavLink className="nav-link" to='/'>Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                        <li><NavLink className="nav-link" to="/newsletter">NewsLetter</NavLink></li>
                    </ul>
                </div>
            </nav>
    </header>
  )
}

export default Header
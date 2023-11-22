import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import ReactSwitch from 'react-switch'
import { useContext } from 'react'
import { themeContext } from '../App'

export function Navbar() {
    const { toggleTheme, theme } = useContext(themeContext)
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <logo><h2 className='logo-txt'>GeekGrid</h2></logo>
                <links>
                    <ul>
                        <li><Link to="/" className='links'>Home</Link></li>
                        <li><Link to="/learn" className='links'>Learn</Link></li>
                        <li><Link to="/articles" className='links'>Articles</Link></li>
                        <li><Link to="/gethired" className='links'>Get Hired</Link></li>
                        <li><Link to="/about" className='links'>About</Link></li>
                    </ul>
                </links>
            </div>
            <div className='navbar-right'>
                {/* {theme === "light" ? <p className='mode-name'>Light mode</p> : <p className='mode-name'>Dark mode</p>} */}
                <ReactSwitch className='toggle-button' onChange={toggleTheme} checked={theme === "light"} />
                <button>Login / SignUp</button>
            </div>
        </div>
    )
}


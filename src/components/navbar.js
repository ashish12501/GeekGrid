import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import ReactSwitch from 'react-switch'
import { useContext } from 'react'
import { themeContext } from '../App'
import { useNavigate, useLocation } from 'react-router-dom'
import { getAuth } from '../config/firebase-config'

export function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const [navopen, setnavopen] = useState(true);
    useEffect(() => {
        if (location.pathname === "/signup" || location.pathname === "/signin") {
            setnavopen(false);
        } else {
            setnavopen(true);
        }
    }, [location.pathname]);

    const { toggleTheme, theme } = useContext(themeContext)
    return (
        <div className={navopen ? "navbar" : "navclose"}>
            <div className='navbar-left'>
                <h2 className='logo-txt'>GeekGrid</h2>
                <ul>
                    <li><Link to="/" className='links'>Home</Link></li>
                    <li><Link to="/learn" className='links'>Learn</Link></li>
                    <li><Link to="/articles" className='links'>Articles</Link></li>
                    <li><Link to="/gethired" className='links'>Get Hired</Link></li>
                    <li><Link to="/about" className='links'>About</Link></li>
                </ul>
            </div>
            <div className='navbar-right'>
                {/* {theme === "light" ? <p className='mode-name'>Light mode</p> : <p className='mode-name'>Dark mode</p>} */}
                <ReactSwitch className='toggle-button' onChange={toggleTheme} checked={theme === "light"} onColor="#02A960" />
                <button onClick={() => { navigate("/signin") }}>Login / SignUp</button>
            </div>
        </div>
    )
}


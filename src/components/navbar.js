import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <logo><h2 className='logo-txt'>GeekGrid</h2></logo>
                <links>
                    <ul>
                        <li><Link to="/learn" className='links'>Learn</Link></li>
                        <li><Link to="/articles" className='links'>Articles</Link></li>
                        <li><Link to="/gethired" className='links'>Get Hired</Link></li>
                        <li><Link to="/about" className='links'>About</Link></li>
                        <li><Link to="/contact" className='links'>Contact</Link></li>
                    </ul>
                </links>
            </div>
            <div className='navbar-right'>
                <button>Login / SignUp</button>
            </div>
        </div>
    )
}


import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import ReactSwitch from 'react-switch';
import { themeContext } from '../App';
import { useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase-config';

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

    const { toggleTheme, theme, userData } = useContext(themeContext);

    const [selectedOption, setSelectedOption] = useState(null);

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
        // You can perform actions based on the selected option here
        if (event.target.value === 'profile') {
            console.log('Profile clicked');
            // Add code for profile action
        } else if (event.target.value === 'logout') {
            handleLogout();
            console.log('Logout clicked');
            // Add code for logout action
        }
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                console.log(error);
            });
        navigate("/");
    };

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
                <ReactSwitch className='toggle-button' onChange={toggleTheme} checked={theme === "light"} onColor="#02A960" />
                {userData ? (
                    <div className="dropdown">
                        <select
                            id="dropdown-options"
                            name="dropdown-options"
                            value={selectedOption}
                            onChange={handleDropdownChange}
                        >
                            <option style={{ display: "none" }} value="User">{userData.displayName}</option>
                            <option value="profile"  >Profile</option>
                            <option value="logout"  >Logout</option>
                        </select>
                    </div>
                ) : (
                    <button onClick={() => { navigate("/signin") }}>Login / SignUp</button>
                )}
            </div>
        </div>
    );
}

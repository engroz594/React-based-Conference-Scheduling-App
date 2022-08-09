import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';
import logo from '../../assets/images/logo.png';
import banner from '../../assets/images/banner.jpg';

const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo"><img src={logo}
                                           alt="LOGO"/></div>
                <div className="push-left">
                    <button id="menu-toggler" data-class="menu-active" className="hamburger">
                    <span className="hamburger-line hamburger-line-top">
                    </span>
                        <span className="hamburger-line hamburger-line-middle">
                    </span>
                        <span className="hamburger-line hamburger-line-bottom">
                    </span>
                    </button>

                    <ul id="primary-menu" className="menu nav-menu">
                        <li className="menu-item">
                            <NavLink exact className="nav__link" to={"/"}>Schedule</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink className="nav__link" to={"/authors"}>Authors</NavLink>
                        </li>
                        {/*<li className="menu-item dropdown"><a className="nav__link" href="#">About</a>*/}
                        {/*    <ul className="sub-nav">*/}
                        {/*        <li><a className="sub-nav__link" href="#">link 1</a></li>*/}
                        {/*        <li><a className="sub-nav__link" href="#">link 2</a></li>*/}
                        {/*        <li><a className="sub-nav__link" href="#">link 3 - long link - long link - long link</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}

                        {/*</li>*/}
                        {/*<li className="menu-item dropdown"><a className="nav__link" href="#">Contact</a>*/}
                        {/*    <ul className="sub-nav">*/}
                        {/*        <li><a className="sub-nav__link" href="#">link 1</a></li>*/}
                        {/*        <li><a className="sub-nav__link" href="#">link 2</a></li>*/}
                        {/*        <li><a className="sub-nav__link" href="#">link 3 - long link - long link - long link</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                        {/*<li className="menu-item "><a className="nav__link" href="#">Blog</a>*/}

                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
            {/*<div>*/}
            {/*    <img src={banner} alt="" style={{"width": "100%", "maxHeight": "50vh", "objectFit": "cover"}}/>*/}
            {/*</div>*/}
        </>
    );
};

export default Header;
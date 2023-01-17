import React from 'react'
import '../styles/Header.css'
import navHomeIconWhite from '../assets/icons/nav_icons/viñeta3_comic_white.svg';
import navAboutIconWhite from '../assets/icons/nav_icons/viñeta4_comic_white.svg';
import navTalksIconWhite from '../assets/icons/nav_icons/viñeta2_comic_white.svg';
import navWorksIconWhite from '../assets/icons/nav_icons/viñeta1_comic_white.svg';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return(
        <header>
            <nav>
                <NavLink to='/' className='navItemContainer'>
                    <img className='navItem' src={navHomeIconWhite} alt="" />
                    <span className='navItemText'>home</span>
                </NavLink>
                <NavLink to='/about' className="navItemContainer">
                    <img className='navItem navItemAbout' src={navAboutIconWhite} alt="" />
                    <span className='navItemText'>about</span>
                </NavLink>
                <NavLink to='/works' className="navItemContainer">
                    <img className='navItem navItemWorks' src={navWorksIconWhite} alt="" />
                    <span className='navItemText'>works</span>
                </NavLink>
                <NavLink to='/talk' className="navItemContainer">
                    <img className='navItem' src={navTalksIconWhite} alt="" />
                    <span className='navItemText'>talk!</span>
                </NavLink>
            </nav>
        </header>
    )
}

export { Header } 
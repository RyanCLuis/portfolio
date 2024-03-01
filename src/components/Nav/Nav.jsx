import React from 'react'
import '../Nav/Nav.css'

const Navbar = () => {
    return (
    <>
        <div className='Nav'>
            <div className='NavbarContainer'>
                <a className='NavLogo' href='/'>
                    <span>Portfolio</span>
                </a>
            <div className='NavItems'>
                <a href='#About'>About</a>
                <a href='#Skills'>Skills</a>
                <a href='#Experiences'>Experiences</a>
                <a href='#Projects'>Projects</a>
                <a href='#Contact'>Contact</a>
            </div>
            <div className='ButtonContainer'>
                <a 
                    className='GitHubButton' 
                    href="https://github.com/ryancluis" 
                    target="_blank"
                    rel="noreferrer"
                >Github Profile</a>
            </div>

            </div>
        </div>
    </>
    )
}

export default Navbar
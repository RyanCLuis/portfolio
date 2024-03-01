import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="FooterContainer">
            <div className="FooterWrapper">
                <h1 className="Logo">Ryan Luis</h1>
                <ul className="FooterNav">
                    <a className="FooterNavLink" href="#About">About</a>
                    <a className="FooterNavLink" href="#Skills">Skills</a>
                    <a className="FooterNavLink" href="#Experiences">Experiences</a>
                    <a className="FooterNavLink" href="#Projects">Projects</a>
                    <a className="FooterNavLink" href="#Contact">Contact</a>
                </ul>
                <div className="SocialMediaIcons">
                    <a
                        href="https://www.instagram.com/ry_guygaming/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className='SocialMediaIcon'
                            src="/images/instagram.png" alt="insta" />
                    </a>
                    <a
                        href="https://twitter.com/Ry_GuyGaming"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className='SocialMediaIcon' 
                            src="/images/Twitter.png" alt="twitter" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/ryancluis/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className='SocialMediaIcon'
                            src="/images/linkedin.png" alt="linkedin" />
                    </a>
                </div>
                <footer className='Copyright'>
                    <p>© 2024 Ryan Luis</p>
                </footer>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import Pic from '../../images/profilePicture.jpg'
import '../AboutMe/Main.css'
import AnimatedBg from '../AnimatedBg/AnimatedBg'



const Main = () => {
    return (
        <>
            <div className='mainContainer'>
                <div className='innerContainer'>
                    <div className='leftContainer'>
                        <h2>Hi, I am <br /> Ryan Luis</h2>
                        <p>I am a junior Software Engineer characterized by creativity, professionalism, and unwavering dedication. With a meticulous attention to detail honed during my time as an AutoCAD designer, I adeptly identified and executed tasks while ensuring precision in measurements for model drafting. Eager to evolve in the dynamic realm of software engineering, I am enthusiastic about fostering collaborative relationships with my peers to enhance our collective success.</p>
                        <button>Resume</button>
                    </div>

                    <div className='rightContainer'>
                        <div className='Bg'>
                            <AnimatedBg />
                        </div>
                        <img 
                            src={Pic} 
                            alt="Ryan Luis" 
                            className="profilePic"
                            />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main

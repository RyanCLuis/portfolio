import React from 'react'
import Pic from '../../images/profilePicture.jpg'
import '../Brand/Brand.css'
import AnimatedBg from '../AnimatedBg/AnimatedBg'



const Main = () => {
    return (
        <>
            <div className='mainContainer'>
                <div className='innerContainer'>
                    <div className='leftContainer'>
                        <h2>Hi, I'm Ryan Luis</h2>
                        <p>As a Software Engineer with a foundation in graphic design and AutoCAD, I embody a versatile blend of creativity, professionalism, and unwavering dedication. <br />My acute attention to detail enables me to execute tasks with precision, ensuring excellence in everything I do. <br />Thriving on collaboration, I eagerly seek opportunities to contribute to impactful projects, driven by the aspiration to make a meaningful difference in the world.</p>
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

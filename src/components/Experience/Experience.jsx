import ExperienceCards from "../ExperienceCards/ExperienceCards"
import React from "react"
import "./Experience.css"
import { experiences } from "../data/experiences"

const Experience = () => {
    return (
        <div className="Container" id="experience">
            <div className="Wrapper">
                <h1 className="Title">Experience</h1>
                <div className="Desc">
                    <p>Here are some of the places I've worked at and some skills I accumulated.</p>
                </div>
                <div className="TimelineSection">
                    <div className="Timeline">
                        {experiences.map((experience, index) => (
                            <div className="TimeLineItem" key={index}>
                                <div className="TimelineSeparator">
                                    <div className="TimelineDot" variant="outline" color="azure">
                                        {index !== experiences.length - 1 && <div className="TimelineConnector" style={{ background: '#854CE6'}}/>}
                                    </div>
                                </div>
                                <div className="TimelineContent" sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCards experience={experience} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
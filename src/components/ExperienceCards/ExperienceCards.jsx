import React from "react"
import "./ExperienceCards.css"
import {Card, Image} from "react-bootstrap"

const ExperienceCards = (experience) => {
    return (
        <Card className="Card">
            {console.log(experience)}
            <div className="Top">
                <Image className="ExperienceImage" src={experience.experience.img}/>
                <body className="Body">
                    <div className="Role">{experience.experience.role}</div>
                    <div className="Company">{experience.experience.company}</div>
                    <div className="Date">{experience.experience.date}</div>
                </body>
            </div>
            <div className="Description">
                <span className="Span">{experience.experience.desc}</span>
                <br/>
                <div className="ExperienceSkills">
                    <p>Skills:</p>
                    <div className="ItemWrapper">
                        {experience.experience.skills.map((skill, index) => (
                            <div className="ExperienceSkill">{skill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ExperienceCards;
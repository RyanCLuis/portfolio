import React from 'react'
import '../Skills/Skills.css'
import { skills } from '../data/skills'

const Skills = () => {
  return (
    <div className='Container' id='skills'>
      <div className='Wrapper'>
        <div className='Skills'>Skills</div>
        <div className='Desc'>
          I have worked with a wide range of technologies, they are:
        </div>
        <div className='SkillContainer'>
          {skills.map((skill) => (
            <div className='Skill'>
              <div className='SkillTitle'>{skill.title}</div>
              <div className='SkillList'>
                {skill.skills.map((item) => (
                  <div className='SkillItem'>
                    <img src={item.image} alt='' className='SkillImage'/>
                    <div className='SkillName'>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
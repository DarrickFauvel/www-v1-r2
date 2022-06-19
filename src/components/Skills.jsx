import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid'
import { skills } from '../data'

const Skills = () => {
  return (
    <section id='skills'>
      <div className='container skills-container'>
        <div className='skills-head'>
          <ChipIcon className='skills-head--icon' />
          <h1 className='skills-head--title'>Skills &amp; Technologies</h1>
          <p className='skills-head--text'>
            Just some of the things in my technical toolkit.
          </p>
        </div>

        <div className='skills-content'>
          {skills.map((skill) => (
            <div key={skill} className='skill'>
              <div className='skill-content'>
                <BadgeCheckIcon className='skill-content--icon' />
                <span className='skill-content--text'>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

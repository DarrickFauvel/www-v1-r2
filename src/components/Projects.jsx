import { CodeIcon } from '@heroicons/react/solid'
import { projects } from '../data'

const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <div className='container projects-container'>
        <div className='projects-head'>
          <CodeIcon className='projects-head--icon' />
          <h1 className='projects-head--title'>Apps I've Built</h1>
          <p className='projects-head--text'>Some of my favorite projects.</p>
        </div>
        <div className='project-cards'>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className='project-card__link'
              target='_blank'
              rel='noopener noreferrer'>
              <div className='project-card'>
                <img
                  alt='gallery'
                  className='project-card__img'
                  src={project.image}
                />
                <div className='project-card--content'>
                  <h2 className='project-card--subtitle'>{project.subtitle}</h2>
                  <h1 className='project-card--title'>{project.title}</h1>
                  <div className='project-card--text'>
                    <p className='project-card--text-lead'>
                      STORY: {project.description}
                    </p>
                    <p className='project-card--text-stack'>
                      STACK: {project.stack}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

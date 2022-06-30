import { useState, useEffect } from 'react'
import { CodeIcon } from '@heroicons/react/solid'
import { projects as data, tabs } from '../../data'
import Projects from './Projects'

const Portfolio = () => {
  const [projects, setProjects] = useState(data)
  const [activeTab, setActiveTab] = useState('Featured')
  const [filteredProjects, setFilteredProjects] = useState([])

  const filterProjects = (category) => {
    const results = projects.filter((project) => {
      if (category === 'featured') {
        return project.isFeatured
      } else {
        return project.category.toLowerCase() === category.toLowerCase()
      }
    })
    setFilteredProjects(results)
  }

  const handleTabClick = (e) => {
    const selectedTab = e.target.innerText
    const selectedCategory = e.target.dataset.category
    setActiveTab(selectedTab)
    filterProjects(selectedCategory)
  }

  useEffect(() => {
    filterProjects('featured')
  }, [])

  return (
    <section id='portfolio' className='projects'>
      <div className='container projects-container'>
        <div className='projects-head'>
          <CodeIcon className='section-head--icon' />
          <h1 className='projects-head--title'>Projects I've Built</h1>
          {/* <p className='projects-head--text'>Some of my favorite projects.</p> */}
        </div>

        <div className='tabs'>
          {tabs.map((tab) => {
            return (
              <button
                className={tab.title === activeTab ? 'tab active' : 'tab'}
                data-category={tab.category}
                onClick={handleTabClick}
                key={tab.category}>
                {tab.title}
              </button>
            )
          })}
        </div>

        <div className='tab-content tab-content--sections'>
          <Projects
            projects={filteredProjects}
            activeTab={activeTab}
            tabs={tabs}
          />
        </div>
      </div>
    </section>
  )
}

export default Portfolio

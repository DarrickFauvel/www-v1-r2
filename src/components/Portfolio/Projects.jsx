import { useState, useEffect } from 'react'
import Card from './Card'
import Modal from './Modal'

const Projects = ({ projects, activeTab, tabs }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    showModal && (document.body.style.overflow = 'hidden')
    !showModal && (document.body.style.overflow = 'unset')
  }, [showModal])

  const cardsTitle = tabs.find((tab) => {
    return tab.title.toLowerCase() === activeTab.toLowerCase()
  })

  return (
    <>
      <h3 className='tab-content--title'>{cardsTitle.subtitle}</h3>
      <div className='cards'>
        {projects.map((project, index) => {
          return <Card project={project} key={index} openModal={openModal} />
        })}
      </div>
      {/* END cards */}
      {showModal && <Modal project={selectedProject} closeModal={closeModal} />}
    </>
  )
}

export default Projects

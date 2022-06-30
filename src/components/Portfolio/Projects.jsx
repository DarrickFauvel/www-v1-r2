import { useState, useEffect } from 'react'
import Card from './Card'
import Modal from './Modal'

const Projects = ({ projects, activeTab, tabs }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setShowModal(true)
    console.log(selectedProject, showModal)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setShowModal(false)
    console.log(selectedProject, showModal)
  }

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

import { useState } from 'react'
import TechStack from './TechStack'
import Modal from './Modal'

const CardSmall = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = (e) => {
    e.stopPropagation()
    setIsModalOpen(false)
  }

  return (
    <>
      <div className='card' onClick={openModal}>
        <div className='card-head'>
          <h4 className='card-title'>{project.title}</h4>
        </div>
        <div className='card-image'>
          <img src={project.image} alt='' />
        </div>
        <div className='card-body'>
          <TechStack project={project} />
        </div>
        {/* END card-body */}
      </div>
      {/* END card */}

      <Modal
        project={project}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  )
}

export default CardSmall

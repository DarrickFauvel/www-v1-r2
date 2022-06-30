import TechStack from './TechStack'

const Card = ({ project, openModal }) => {
  return (
    <>
      <div className='card' onClick={() => openModal(project)}>
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
    </>
  )
}

export default Card

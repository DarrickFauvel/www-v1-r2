const Card = ({ project, openModal }) => {
  const stackItems = project.stack.map((item) => {
    return (
      <li className='stack-item' key={item}>
        {item}
      </li>
    )
  })

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
          {/* <p className='card-text'>{project.description}</p> */}
          <ul className='card-stack'>{stackItems}</ul>
          {/* <ul className='card-links'>
            <li className='links-item'>
              <a
                href={project.liveUrl}
                target='_blank'
                className='links-link'
                title='Go to live site on Netlify'>
                <img src='./netlify-logo-cropped.png' alt='' />
                <span>Live Site</span>
              </a>
            </li>
            <li className='links-item'>
              <a href={project.repoUrl} className='links-link' target='_blank'>
                <i className='fa-brands fa-github fa-2xl'></i>
                <span>GitHub</span>
              </a>
            </li>
          </ul> */}
        </div>
        {/* END card-body */}
      </div>
      {/* END card */}
    </>
  )
}

export default Card

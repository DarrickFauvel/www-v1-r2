import TechStack from './TechStack'

const Modal = ({ project, closeModal }) => {
  return (
    <div className='modal' tabIndex='-1' onClick={closeModal}>
      <div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{project.title}</h5>
            <div className='modal-image'>
              <img src={project.image} alt='' />
            </div>
          </div>
          {/* END modal-header */}

          <div className='modal-scroll-area'>
            <div className='modal-body'>
              <p>{project.description}</p>
            </div>
            <TechStack project={project} />
            <ul className='modal-links'>
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
                <a
                  href={project.repoUrl}
                  className='links-link'
                  target='_blank'>
                  <i className='fa-brands fa-github fa-2xl'></i>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
            {/* END modal-links */}
          </div>
          {/* END modal-scroll-area */}

          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={closeModal}>
              Close
            </button>
          </div>
          {/* END modal-footer */}
        </div>
        {/* END modal-content */}
      </div>
      {/* END modal-dialog */}
    </div>
    // END modal
  )
}

export default Modal

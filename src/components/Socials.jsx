const Socials = () => {
  return (
    <div className='socials-container'>
      <span className='fa-stack fa-2x'>
        <a
          className='social__link'
          href='https://www.linkedin.com/in/DarrickFauvel'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fa-brands fa-linkedin fa-2xl fa-stack-2x'></i>
        </a>
      </span>
      <span className='fa-stack fa-2x'>
        <a
          className='social__link'
          href='https://github.com/DarrickFauvel'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fa-brands fa-github fa-2xl fa-stack-2x'></i>
        </a>
      </span>
    </div>
  )
}

export default Socials

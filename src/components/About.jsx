const About = () => {
  return (
    <section id='about'>
      <div className='container about-container'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            Hi, I'm Darrick.
            <br className='hero-title-sub' /> I build web apps.
          </h1>
          <p className='hero-text'>
            I love coding things from scratch with HTML, CSS, JavaScript, and
            using the latest library/framework to help get the job done. I'm
            quietly confident, naturally curious, and perpetually working on
            improving my chops one dev challenge at a time.
          </p>
          <div className='hero-buttons'>
            <a href='#contact' className='hero-button hero-button--contact'>
              Work With Me
            </a>
            <a href='#portfolio' className='hero-button hero-button--projects'>
              See My Work
            </a>
          </div>
        </div>

        <div className='hero-image'>
          <img className='hero-image__img' alt='hero' src='./coding.svg' />
        </div>
      </div>
    </section>
  )
}

export default About

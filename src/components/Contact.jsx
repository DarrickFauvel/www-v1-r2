import { ChatAlt2Icon } from '@heroicons/react/solid'
// import Form from './Form'
import Socials from './Socials'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container contact-container'>
        <div className='contact-head'>
          <ChatAlt2Icon className='section-head--icon' />
          <h1 className='contact-head--title'>Contact Me</h1>
          <p className='contact-head--text'>
            Let's see if we're a match and work together.
          </p>
        </div>

        <Socials />
      </div>
    </section>
  )
}

export default Contact

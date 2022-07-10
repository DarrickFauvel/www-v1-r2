import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/solid'

const brandVariants = {
  hidden: {
    opacity: 0,
    x: -30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.5
    }
  }
}

const navVariants = {
  hidden: {
    opacity: 0,
    x: 30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.5
    }
  }
}

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: -30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.5
    }
  }
}

const Navbar = () => {
  return (
    <div className='container navbar-container'>
      <motion.div
        className='navbar-brand'
        variants={brandVariants}
        initial='hidden'
        animate='visible'>
        <a href='#about' className='navbar-brand__link'>
          Darrick Fauvel
        </a>
      </motion.div>
      <motion.nav
        className='nav'
        variants={navVariants}
        initial='hidden'
        animate='visible'>
        <a href='#portfolio' className='nav__link'>
          Portfolio
        </a>
        <a href='#skills' className='nav__link'>
          Skills
        </a>
        <a href='#contact' className='nav__link'>
          Contact
        </a>
        {/* <a href='#testimonials' className='nav__link'>
              Testimonials
            </a> */}
      </motion.nav>
      <motion.a
        href='#contact'
        className='nav-contact__link'
        variants={buttonVariants}
        initial='hidden'
        animate='visible'>
        <div className='nav-contact__link--text'>
          <div>Hire Me</div>
          <div>
            <ArrowDownIcon className='nav-arrow' />
          </div>
        </div>
      </motion.a>
    </div>
  )
}

export default Navbar

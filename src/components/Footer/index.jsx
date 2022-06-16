const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center'>
        <div className='footer-content title-font font-light text-white mb-4 md:mb-0'>
          Made with{' '}
          <span role='img' aria-label='heart emoji'>
            ❤️
          </span>{' '}
          in Massachusetts.
        </div>
      </div>
    </footer>
  )
}

export default Footer

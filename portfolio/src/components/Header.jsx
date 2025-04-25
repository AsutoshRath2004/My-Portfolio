import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto container-padding flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">Asutosh<span className="text-blue-500"> Rath</span></a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-blue-500 transition">About</a>
          <a href="#skills" className="text-white hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="text-white hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="text-white hover:text-blue-500 transition">Contact</a>
          <a 
            href="https://github.com/AsutoshRath2004" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-500 transition"
          >
            GitHub
          </a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="flex flex-col space-y-4 px-6">
            <a href="#about" className="text-white hover:text-blue-500 transition py-2" onClick={toggleMenu}>About</a>
            <a href="#skills" className="text-white hover:text-blue-500 transition py-2" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="text-white hover:text-blue-500 transition py-2" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="text-white hover:text-blue-500 transition py-2" onClick={toggleMenu}>Contact</a>
            <a 
              href="https://github.com/AsutoshRath2004" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-500 transition py-2"
              onClick={toggleMenu}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
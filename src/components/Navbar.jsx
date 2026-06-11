import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: '关于我', href: '#about' },
    { label: '服务流程', href: '#projects' },
    { label: '核心优势', href: '#skills' },
    { label: '联系我', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-pill">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className="navbar-link">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

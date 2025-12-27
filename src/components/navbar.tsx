import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo_2.png'

const links = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/hakkimizda', label: 'Hakkımızda' },
    { path: '/programlar', label: 'Programlar' },
    { path: '/egitmenler', label: 'Eğitmenler' },
    { path: '/iletisim', label: 'İletişim' },
]

export default function Navbar() {
    const { pathname } = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="navbar">
            <div className="navbar-content">
                <img src={logo} className="navbar-logo" alt="Aristo Sanat Akademi Logo" />
                <nav>
                    <ul className={`navbar-links ${isMenuOpen ? 'mobile-open' : ''}`}>
                        {links.map(({ path, label }) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    className={`navbar-link ${pathname === path ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button 
                    className="mobile-menu-toggle" 
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </header>
    )
}
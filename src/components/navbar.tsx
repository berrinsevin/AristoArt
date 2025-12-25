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
    return (
        <header className="navbar">
            <div className="navbar-content">
                    <img src={logo} style={{ height: "95px" }} />
                <nav>
                    <ul className="navbar-links">
                        {links.map(({ path, label }) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    className={`navbar-link ${pathname === path ? 'active' : ''}`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="mobile-menu-toggle">☰</button>
            </div>
        </header>
    )
}
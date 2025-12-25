import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/main-page.tsx'
import AboutPage from './pages/about-page.tsx'
import ProgramsPage from './pages/programs-page.tsx'
import EducatorPage from './pages/educators-page.tsx'
import Communication from './pages/communication-page.tsx'
import Navbar from './components/navbar.tsx'
import ScrollToTop from './components/scroll-top.tsx'

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/programlar" element={<ProgramsPage />} />
        <Route path="/egitmenler" element={<EducatorPage />} />
        <Route path="/iletisim" element={<Communication />} />
      </Routes>
    </div>
  )
}
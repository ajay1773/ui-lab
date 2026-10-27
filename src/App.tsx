import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import RulesPage from './pages/RulesPage'
import TypographyPage from './pages/TypographyPage'

function App() {
  return (
    <main className="lab">
      <nav className="lab-nav" aria-label="Lab sections">
        <NavLink to="/" end>
          Rules
        </NavLink>
        <NavLink to="/typography">Typography</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<RulesPage />} />
        <Route path="/typography" element={<TypographyPage />} />
      </Routes>
    </main>
  )
}

export default App

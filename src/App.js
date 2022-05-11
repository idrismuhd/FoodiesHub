import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Settings from './pages/Settings'
import './styles/App.scss'

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/Settings' element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App

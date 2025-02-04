import './App.css'
import { Route, Routes } from 'react-router-dom'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/login' element={<Auth />}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App

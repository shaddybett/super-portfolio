import React from 'react'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import About from './components/About'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
    </div>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, useNavigate } from 'react-router-dom'


//component imports
import Main from './components/main'
import Works from './components/works'
import Blog from './components/works'
import finalyearproj from './components/finalyearproj'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/echo-portfolio/" element= {
          <>
            <div className='bg bg-fixed w-screen '>
              <Main />
            </div>
          </> 
        } 
      />
      <Route path="/echo-portfolio/my-work" element= {
          <>
            <div className='bg bg-fixed w-screen '>
              <Works />
            </div>
          </> 
        } 
      />

      <Route path="/echo-portfolio/my-blog" element= {
          <>
            <div className='bg bg-fixed w-screen '>
              <Blog />
            </div>
          </> 
        } 
      />

      <Route path="/echo-portfolio/echo-bike-app" element= {
          <>
            <div className='bg bg-fixed w-screen '>
              <Finalyearproj />
            </div>
          </> 
        } 
      />

      </Routes>
      
    </>
  )
}

export default App

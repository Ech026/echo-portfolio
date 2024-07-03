import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, useNavigate } from 'react-router-dom'


//component imports
import Main from './components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/echo-portfolio/" element= {
          <>
            <div className='bg m-0 '>
              <Main />
            </div>
          </> 
        } 
      />

      </Routes>
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom";

//component imports
import Main from "./components/main";


function App() {

  const navigate = useNavigate();

  return (
    <>
      {/* <Routes>
        <Route path="/lmao" element={<Main />} />
      </Routes> */}
      <div>limau</div>
    </>
  )
}

export default App

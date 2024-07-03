import React from 'react'
import { IconContext } from "react-icons";
import { FaGithub, FaInstagramSquare, FaLinkedin   } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className='z-10 fixed hidden md:flex flex-col justify-center h-screen'> 
      <IconContext.Provider value={{ className: "m-3 text-4xl" }}>
        <div>
          <a className='shadow' href="#"><FaGithub /></a>
          <a className='shadow' href="#"><FaInstagramSquare /></a>
          <a className='shadow' href="#"><FaLinkedin /></a>

        </div> 
      </IconContext.Provider>
    </div>
  )
}

export default Sidebar
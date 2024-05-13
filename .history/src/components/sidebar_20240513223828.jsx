import React from 'react'
import { IconContext } from "react-icons";
import { FaGithub, FaInstagramSquare, FaLinkedin   } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className='z-10 absolute sticky flex flex-col justify-center h-screen'> 
      <IconContext.Provider value={{ className: "m-3 text-4xl" }}>
        <div>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaInstagramSquare /></a>
          <a href="#"><FaLinkedin /></a>

        </div> 
      </IconContext.Provider>
    </div>
  )
}

export default Sidebar
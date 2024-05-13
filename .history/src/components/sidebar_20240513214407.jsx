import React from 'react'
import { IconContext } from "react-icons";
import { FaGithub, FaInstagramSquare  } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className='z-10 absolute'> 
      <IconContext.Provider value={{ className: "react-icons" }}>
        <div>
          <FaGithub /><FaInstagramSquare />
        </div> 
      </IconContext.Provider>
    </div>
  )
}

export default Sidebar
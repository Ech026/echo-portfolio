import React from 'react'
import { IconContext } from "react-icons";
import { FaGithub, FaInstagramSquare  } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className='z-10 absolute flex flex-col justify-center h-screen'> 
      <IconContext.Provider value={{ className: "m-2 p-2 text-4xl" }}>
        <div>
          <FaGithub /><FaInstagramSquare />
        </div> 
      </IconContext.Provider>
    </div>
  )
}

export default Sidebar
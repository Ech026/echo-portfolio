import React from 'react'
import { IconContext } from "react-icons";
import { FaGithub, FaInstagramSquare  } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className='z-10 absolute'> <FaGithub /><FaInstagramSquare /></div>
  )
}

export default Sidebar
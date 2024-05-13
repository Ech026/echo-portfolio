import React from 'react'
import Sidebar from './sidebar'

import pic from '../assets/react.svg'



const Main = () => {
  return (
    <>
        <Sidebar />
        <div className='bg min-h-screen'>
          <img src={pic} alt="" />
        </div>


    </>
  )
}


export default Main


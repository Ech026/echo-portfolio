import React from 'react'
import Sidebar from './sidebar'

import pic from '../assets/profile.jpg'



const Main = () => {
  return (
    <>
        <Sidebar />
        <div className='bg min-h-screen'>
          <div className=''>
            <img src={pic} alt="" />
          </div>
          
        </div>


    </>
  )
}


export default Main


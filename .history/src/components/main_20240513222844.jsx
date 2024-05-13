import React from 'react'
import Sidebar from './sidebar'

import pic from '../assts/profile'



const Main = () => {
  return (
    <>
        <Sidebar />
        <div className='bg min-h-screen'>
          <pic />
        </div>


    </>
  )
}


export default Main


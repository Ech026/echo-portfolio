import React from 'react'
import Sidebar from './sidebar'

import pic from '../assets/profile.jpg'



const Main = () => {
  return (
    <>
        <Sidebar />
        <div className='bg min-h-screen flex flex-col justify-center p-40'>
          <div className='flex justify-center'>
            <div className='min-w-screen'>
              <img src={pic} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
              <div className='text-3xl font-bold'>Aqil Aizuddin</div>
              <div className='text-xl font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et recusandae repellendus distinctio asperiores, nisi pariatur blanditiis, dolor placeat voluptatibus quaerat dignissimos enim beatae nam. Doloremque reprehenderit placeat quae alias?</div>
            </div>
          </div>
          
          
        </div>


    </>
  )
}


export default Main


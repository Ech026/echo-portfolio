import React from 'react'
import Sidebar from './sidebar'

import pic from '../assets/profile.jpg'



const Main = () => {
  return (
    <>
        <Sidebar />
        <div className='bg min-h-screen flex flex-col justify-center p-40'>
          <div className='flex justify-center'>
            <div className='min-w-[400px] max-w-[700px] p-4'>
              <img className='' src={pic} alt="" />
            </div>
            <div className='flex flex-col justify-center text-justify p-4'>
              <div className='text-6xl font-bold p-2'>Aqil Aizuddin</div>
              <div className='text-xl font-light max-w-[900px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et recusandae repellendus distinctio asperiores, nisi pariatur blanditiis, dolor placeat voluptatibus quaerat dignissimos enim beatae nam. Doloremque reprehenderit placeat quae alias?</div>
            </div>
          </div>
          
          
        </div>


    </>
  )
}


export default Main


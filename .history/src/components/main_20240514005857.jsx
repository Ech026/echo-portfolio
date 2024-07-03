import React from 'react'
import Sidebar from './sidebar'
import Nav from './nav'


import pic from '../assets/profile.jpg'



const Main = () => {
  return (
    <>
        <Sidebar />
        <Nav />
        <div className=' min-h-screen flex flex-col justify-center px-20'>
        
          <div className='flex justify-center'>
            <div className='min-w-[300px] max-w-[600px] p-4'>
              <img className='' src={pic} alt="" />
            </div>
            <div className='flex flex-col justify-center text-justify p-4'>
              <div className='p-2 text-6xl font-bold'>Aqil Aizuddin</div>
              <div className='p-2 text-xl font-light max-w-[900px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et recusandae repellendus distinctio asperiores, nisi pariatur blanditiis, dolor placeat voluptatibus quaerat dignissimos enim beatae nam. Doloremque reprehenderit placeat quae alias?</div>
              <div>
                <button className='z-20 btn w-fit border rounded-none mt-1 ml-1 absolute'>Learn More</button>
                <button className='z-20 btn w-fit border rounded-none'>Learn More</button>
              </div>
              
              
            </div>
          </div>
          
          
        </div>


    </>
  )
}


export default Main


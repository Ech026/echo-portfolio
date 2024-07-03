import React from 'react'
import Sidebar from './sidebar'
import Nav from './nav'


import pic from '../assets/profile.jpg'



const Main = () => {
  return (
    <>
        <Sidebar />
        <Nav />
        <div className=' md:min-h-screen flex flex-col justify-center px-6 md:px-20'>
        
          <div className='flex flex-col-reverse md:flex-row justify-center'>
            <div className='md:min-w-[300px] md:max-w-[600px] md:p-4'>
              <img className='' src={pic} alt="" />
            </div>
            <div className='flex flex-col justify-center md:text-justify md:p-4'>
              <div className='p-2 text-4xl md:text-6xl font-bold'>Aqil Aizuddin</div>
              <div className='p-2 text-xl font-light md:max-w-[900px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et recusandae repellendus distinctio asperiores, nisi pariatur blanditiis, dolor placeat voluptatibus quaerat dignissimos enim beatae nam. Doloremque reprehenderit placeat quae alias?</div>
              <div className='hidden md:inline'> 
                <button className='z-20 btn w-fit rounded-none absolute'>Learn More</button>
                <button className='btn w-fit rounded-none absolute mt-1 ml-1 bg-black'>Learn More</button>
              </div>
              
              
            </div>
            
          </div>
          
          
        </div>


    </>
  )
}


export default Main


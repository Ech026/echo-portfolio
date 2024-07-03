import React from 'react'
import Sidebar from './sidebar'
import Nav from './nav'
import Footer from './footer'
import Hero from './hero'


import pic from '../assets/profile.jpg'



const Main = () => {
  return (
    <>
        <Sidebar />
        <Nav />

        <div className=' hero md:min-h-screen flex flex-col justify-center px-6 md:px-20'>
        
          <div className='hero-content flex flex-col-reverse md:flex-row justify-center'>
            <div className='self-center md:min-w-[300px] max-w-[250px] md:max-w-[600px] md:p-4'>
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
        <div className='md:min-h-screen bg-2 p-20'>
          <div className=" z-20 card w-96 bg-white shadow-xl rounded-none absolute">
            <div className="card-body">
              <h2 className="card-title">About Me</h2>
              <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore facere ex sunt tempora eos voluptatem, quas libero at itaque necessitatibus ratione, culpa reprehenderit voluptate perferendis iste tempore, accusantium aliquid?</p>
                
            </div>
          </div>
          <div className=" mt-1 ml-1 card w-96 bg-[#e6122b] shadow-xl rounded-none border border-spacing-44 absolute">
            <div className="card-body">
              <h2 className="card-title">About Me</h2>
              <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore facere ex sunt tempora eos voluptatem, quas libero at itaque necessitatibus ratione, culpa reprehenderit voluptate perferendis iste tempore, accusantium aliquid?</p>
                
            </div>
          </div>
        </div>
        
          
          
          
          
        

        <Footer />

    </>
  )
}


export default Main


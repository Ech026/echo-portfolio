import React from 'react'
import Sidebar from './sidebar'
import Nav from './nav'
import Footer from './footer'

const finalyearproj = () => {
  return (
    <>
    <Sidebar/>
    <Nav/>

    <div className='hidden md:block md:min-h-screen bg-fixed p-20'>
          <div className='flex justify-evenly'>
            

            <div className='flex flex-col justify-between'>
            <div className='mb-10'>
                <div className=" z-20 card w-[600px] bg-white border border-[#e6122b] rounded-none absolute">
                  <div className="card-body">
                    <h2 className="card-title font-light">project</h2>
                    <h2 className='card-title'>Echo Bike App</h2>
                    

                      
                  </div>
                </div>
                <div className=" mt-2 ml-2 card w-[600px] bg-[#000] shadow-xl rounded-none ">
                  <div className="card-body">
                  <h2 className="card-title">Education</h2>
                    <p className='text-left'>Jan - June 2023</p>
                    <p className='text-left'>Bachelor of Science (Hons) in Computing, Major in Software Development | Universiti Teknologi Brunei</p>
                    <p className='text-left'>Upper Second Class Honours</p>
                      
                  </div>
                </div>
            </div>
            
              
              
              
            </div>
          </div>
        </div>
    <Footer/>
    </>
  )
}

export default finalyearproj
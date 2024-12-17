import React from 'react'
import Sidebar from './sidebar'
import Nav from './nav'
import Footer from './footer'

const finalyearproj = () => {
  return (
    <>
    <Sidebar/>
    <Nav/>

    <div className='m-10 mt-15'>
                <div className=" z-20 card w-[600px] bg-white border border-[#e6122b] rounded-none absolute">
                  <div className="card-body">
                    <h2 className="card-title">Education</h2>
                    <p className='text-left'>2020 - 2024</p>
                    <p className='text-left'>Bachelor of Science (Hons) in Computing, Major in Software Development | Universiti Teknologi Brunei</p>
                    <p className='text-left'>Upper Second Class Honours</p>

                      
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
    <Footer/>
    </>
  )
}

export default finalyearproj
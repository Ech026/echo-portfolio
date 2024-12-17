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
          <div className='flex justify-evenly text-left'>
            

            <div className='flex flex-col justify-between'>
            <div className='mb-10'>
                <div className=" z-20 card w-[600px] bg-white border border-[#e6122b] rounded-none absolute">
                  <div className="card-body">
                    <h2 className="card-title font-light text-gray-400">project title.</h2>
                    <h2 className='card-title text-3xl underline-offset-1'>Echo Bike App</h2>
                    <h2 className="card-title font-light mt-4">description.</h2>
                    <p className=''>This final year project explores the development and implementation of a mobile application for bike sharing tailored to address the absence of a public bike share system and inadequate cycling infrastructure in Brunei Darussalam, exacerbated by a car-centric culture. The proposed solution aims to facilitate and complement a bike-sharing program by providing users with a user-friendly interface to rent bikes at designated docks. Leveraging technologies such as QR code scanning, the application offers robust login authentication, a secure token system, and an interactive map interface, enhancing user convenience and security. Developed using the MERN stack, with React Native for the frontend, and NodeJS with Express for the backend, supported by MongoDB as the database, the application demonstrates scalability, performance, and adaptability. Through its availability to the public, the application seeks to incentivize biking as a viable transportation mode, contributing to sustainable urban mobility in Brunei Darussalam.</p>
                    

                      
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
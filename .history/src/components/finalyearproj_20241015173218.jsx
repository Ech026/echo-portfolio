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
            <div className='mb-10 mx-36'>
                <div className="mt-8 card bg-white border border-[#e6122b] rounded-none">
                  <div className='flex justify-center'>
                  <div className="card-body bg-white">
                    <h2 className="card-title font-light text-gray-400">project title.</h2>
                    <h2 className='card-title text-3xl'>Echo Bike App</h2>
                    <h2 className='card-title font-light text-gray-400'>date.</h2>
                    <h2 className='card-title text-2xl'>2024</h2>
                    <h2 className="card-title font-light text-gray-400 mt-4">description.</h2>
                    <p className=''>This final year project explores the development and implementation of a mobile application for bike sharing tailored to address the absence of a public bike share system and inadequate cycling infrastructure in Brunei Darussalam, exacerbated by a car-centric culture. The proposed solution aims to facilitate and complement a bike-sharing program by providing users with a user-friendly interface to rent bikes at designated docks. Leveraging technologies such as QR code scanning, the application offers robust login authentication, a secure token system, and an interactive map interface, enhancing user convenience and security. Developed using the MERN stack, with React Native for the frontend, and NodeJS with Express for the backend, supported by MongoDB as the database, the application demonstrates scalability, performance, and adaptability. Through its availability to the public, the application seeks to incentivize biking as a viable transportation mode, contributing to sustainable urban mobility in Brunei Darussalam.</p>
                  </div>
                  <div className="mockup-code m-4 mt-36 ">
                    <pre data-prefix=">" className="text-warning"><code>Made with...</code></pre>
                    <pre data-prefix=">" className=""><code></code></pre>
                    <pre data-prefix="$" className='text-blue-500'><code>React-Native</code></pre>
                    <pre data-prefix=">" className="text-red-500"><code>Express</code></pre>
                    <pre data-prefix=">" className="text-success"><code>MongoDB</code></pre>
                    <pre data-prefix="$" className='text-yellow-200'><code>NodeJs</code></pre>
                    
                  </div>
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
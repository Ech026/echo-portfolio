import React from 'react'
import Sidebar from './sidebar'
import Nav from './nav'
import Footer from './footer'

const finalyearproj = () => {
  return (
    <>
    <Sidebar/>
    <Nav/>

    <div className='m-10 p-4 flex flex-col text-left'>
        <h1 >Final Year Project</h1>
        <p>This final year project explores the development and implementation of a mobile application for bike sharing tailored to address the absence of a public bike share system and inadequate cycling infrastructure in Brunei Darussalam, exacerbated by a car-centric culture. The proposed solution aims to facilitate and complement a bike-sharing program by providing users with a user-friendly interface to rent bikes at designated docks. Leveraging technologies such as QR code scanning, the application offers robust login authentication, a secure token system, and an interactive map interface, enhancing user convenience and security. Developed using the MERN stack, with React Native for the frontend, and NodeJS with Express for the backend, supported by MongoDB as the database, the application demonstrates scalability, performance, and adaptability. Through its availability to the public, the application seeks to incentivize biking as a viable transportation mode, contributing to sustainable urban mobility in Brunei Darussalam.</p>
    </div>
    <Footer/>
    </>
  )
}

export default finalyearproj
import React from 'react'
import Sidebar from './sidebar'
import Nav from './nav'
import Footer from './footer'
import Project from './project'

const Works = () => {
  return (
    <>
    <Sidebar />
    <Nav />
    <div className=' hero md:min-h-screen flex flex-col justify-center px-6 md:px-20'>
        <Project title="Final Year Project" desc="My final year project during my time at Universiti Teknologi Brunei titled: 'Urban Sustainability: Bike Sharing Application'. "/>
          
    </div>
    </>
  )
}

export default Works
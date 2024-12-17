import React from 'react'
import Sidebar from './sidebar'
import Nav from './nav'
import Footer from './footer'
import Project from './project'

import pic from '../assets/profile.jpg'


const Works = () => {
  return (
    <>
    <Sidebar />
    <Nav />
    <div className=' hero md:min-h-screen flex justify-center px-6 md:px-20 text-left'>
        <Project 
        title="Final Year Project" 
        desc="My final year project during my time at Universiti Teknologi Brunei titled: 'Urban Sustainability: Bike Sharing Application'. "
        modalTitle= "Final Year Project"
        modalDesc="Loremjfdkalsjfdkl;sajflkd"
        img={pic}
        />
        

        <Project 
        title="This Website" 
        desc="This Website"
        modalTitle= "This Website"
        modalDesc="This Website"
        img={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
        />
          
    </div>
    </>
  )
}

export default Works
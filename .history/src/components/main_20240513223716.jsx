import React from 'react'
import Sidebar from './sidebar'

import pic from '../assets/profile.jpg'



const Main = () => {
  return (
    <>
        <Sidebar />
        <div className='bg min-h-screen'>
          <div>
            <div className=''>
              <img src={pic} alt="" />
            </div>
            <div>
              <div>AWIL</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, et recusandae repellendus distinctio asperiores, nisi pariatur blanditiis, dolor placeat voluptatibus quaerat dignissimos enim beatae nam. Doloremque reprehenderit placeat quae alias?</div>
            </div>
          </div>
          
          
        </div>


    </>
  )
}


export default Main


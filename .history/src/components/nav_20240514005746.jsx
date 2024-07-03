import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between w-screen text-2xl pt-10 absolute'>
        <div className='flex px-14'>
            <div className='px-4'>Home</div>
            <div className='px-4'>Works</div>
        </div>
        <div className='flex px-14 text-xl'>
            <button className='z-20 btn w-fit rounded-none'>Contact Me</button>
            <button className='btn w-fit rounded-none absolute mt-1 ml-1 bg-black border'>Contact Me</button>
            
            
        </div>
        
    </div>
  )
}

export default Nav
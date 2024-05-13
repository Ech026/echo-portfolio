import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between w-screen text-2xl pt-10 absolute'>
        <div className='flex px-14'>
            <div className='px-4'>Home</div>
            <div className='px-4'>Works</div>
        </div>
        <div className='flex px-14 text-xl'>
            <a className='p-2 font-light bg-[#e07a3f] text-red-600 w-fit'>Contact Me</a>
        </div>
        
    </div>
  )
}

export default Nav
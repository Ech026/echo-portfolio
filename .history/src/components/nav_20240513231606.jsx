import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between w-screen text-2xl pt-10 absolute'>
        <div className='flex px-4'>
            <div className='px-4'>Home</div>
            <div className='px-4'>Works</div>
        </div>
        <div className='flex px-4'>
            <div className='bg-white w-fit'>Contact</div>
        </div>
        
    </div>
  )
}

export default Nav
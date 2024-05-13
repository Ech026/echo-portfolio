import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-around w-screen text-2xl pt-10 absolute'>
        <div flex>
            <div className='px-4'>Home</div>
            <div className='px-4'>Works</div>
        </div>
        <div flex>
            <div>Contact</div>
        </div>
        
    </div>
  )
}

export default Nav
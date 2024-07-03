import React from 'react'

const Nav = () => {
  return (
    <>
      <div className='hidden md:flex justify-between w-screen text-2xl pt-10 absolute'>
          <div className='flex px-14'>
              <div className='px-4'>Home</div>
              <div className='px-4'>Works</div>
          </div>
          <div className='flex px-14 text-xl'>
              <button className='z-20 btn w-fit rounded-none'>Contact Me</button>
              <button className='btn w-fit rounded-none absolute mt-1 ml-1 bg-black'>Contact Me</button>
              
              
          </div>
          
      </div>
      <div>
          <div className="flex justify-end md:hidden dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">Click</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
    </div>
      </div>
    </>
  )
}

export default Nav
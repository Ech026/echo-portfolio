import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className='hidden md:flex justify-between w-screen text-2xl pt-10 absolute'>
          <div className='flex px-14'>
              <div className='px-4'><Link to={"/echo-portfolio/"}>Home</Link></div>
              <div className='px-4'><Link to={"/echo-portfolio/my-work"}>Works</Link></div>
              <div className='px-4'><Link to={"/echo-portfolio/my-blog"}>Blog</Link></div>

          </div>
          <div className='flex px-14 text-xl'>
              <button className='z-20 btn w-fit rounded-none'>Contact Me</button>
              <button className='btn w-fit rounded-none absolute mt-1 ml-1 bg-black'>Contact Me</button>
              
              
          </div>
          
      </div>
      <div className='flex justify-end p-2'>
      
      <details className="dropdown dropdown-end md:hidden absolute">
        <summary className="m-1 btn btn-circle swap swap-rotate float">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />
        
        {/* hamburger icon */}
        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
        
        {/* close icon */}
        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg></summary>
        
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>
      
      </div>
    </>
  )
}

export default Nav
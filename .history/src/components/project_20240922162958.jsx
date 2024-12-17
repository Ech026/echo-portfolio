import React from 'react'
import pic from '../assets/profile.jpg'



const project = (props) => {
  return (
    <>
    <div className="card card-compact bg-base-100 w-96 shadow-xl object-fill m-4 max-w-[20em] min-w[20em]">
    <figure className='max-w-[20em] max-h-[12em] min-w-[20em] min-h-[12em]'>
        <img
        className='max-w-[20em] max-h-[12em] min-w-[20em] min-h-[12em] object-cover'
        src={props.img} 
        alt="Shoes" />
    </figure>
    <div className="card-body min-h-[16em]">
        <h2 className="card-title">{props.title}</h2>
        <p className='truncate'>{props.desc}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
    </div>

    

    
    </>
    

    
  )
}

export default project
import React from 'react'
import pic from '../assets/profile.jpg'


const project = (props) => {
  return (
    <>
    <div className="card card-compact bg-base-100 w-96 shadow-xl object-fill m-4">
    <div className='object-cover max-w-[25em] max-h-[25em]'>
        <img
        className='w-full h-full'
        src={props.img}
        alt="Shoes" />
    </div>
    <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
    </div>

    

    
    </>
    

    
  )
}

export default project
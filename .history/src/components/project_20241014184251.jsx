import React from 'react'
import pic from '../assets/profile.jpg'



const project = (props) => {
  return (
    <>
    <div className="card card-compact bg-base-100 w-96 shadow-xl object-fill m-4 max-w-[20em] min-w[20em] rounded-none">
    <figure className='max-w-[20em] max-h-[12em] min-w-[20em] min-h-[12em]'>
        <img
        className='max-w-[20em] max-h-[12em] min-w-[20em] min-h-[12em] object-cover'
        src={props.img} 
        alt="Shoes" />
    </figure>
    <div className="card-body min-h-[16em]">
        <h2 className="card-title">{props.title}</h2>
        <p className=''>{props.desc}</p>
        <div className="card-actions justify-end">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This final year project explores the development and implementation of a mobile application for bike sharing tailored to address the absence of a public bike share system and inadequate cycling infrastructure in Brunei Darussalam, exacerbated by a car-centric culture. The proposed solution aims to facilitate and complement a bike-sharing program by providing users with a user-friendly interface to rent bikes at designated docks. Leveraging technologies such as QR code scanning, the application offers robust login authentication, a secure token system, and an interactive map interface, enhancing user convenience and security. Developed using the MERN stack, with React Native for the frontend, and NodeJS with Express for the backend, supported by MongoDB as the database, the application demonstrates scalability, performance, and adaptability. Through its availability to the public, the application seeks to incentivize biking as a viable transportation mode, contributing to sustainable urban mobility in Brunei Darussalam.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    </div>
    </div>

    

    
    </>
    

    
  )
}

export default project
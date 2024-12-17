import React from 'react'
import pic from '../assets/profile.jpg'


const project = (props) => {
  return (
    <>
    <div className="z-20  card card-compact bg-base-100 w-96 shadow-xl m-6 rounded-none max-w-96  min-h-[30rem] max-h-[30rem]">
        <figure className='object-contain'>
            <img
            src={props.img}
            alt="Shoes" />
        </figure>
        <div className="card-body min-h-48 max-h-48">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.desc}</p>
            <div className="card-actions justify-end">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Read More</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{props.modalTitle}</h3>
                <p className="py-4">{props.modalDesc}</p>
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
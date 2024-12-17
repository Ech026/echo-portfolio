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
    <p className="py-4">Press ESC key or click the button below to close</p>
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
import React from 'react'

const project = (props) => {
  return (
    <>
    <div className="z-20 absolute card card-compact bg-base-100 w-96 shadow-xl m-6 rounded-none">
        <figure>
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body min-h-48 ">
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

    <div className="mt-2 ml-2 card card-compact  w-96 min-h-48 shadow-xl m-6 rounded-none bg-black">
        
    </div>

    
    </>
    

    
  )
}

export default project
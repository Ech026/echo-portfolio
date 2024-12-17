import React from 'react'

const project = (props) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.desc}</p>
            <div className="card-actions justify-end">
            {/* <!-- Open the modal using ID.showModal() method --> */}
            <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
            <dialog id="my_modal_1" class="modal">
            <div class="modal-box">
                <h3 class="text-lg font-bold">Hello!</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
            </div>
        </div>
    </div>
  )
}

export default project
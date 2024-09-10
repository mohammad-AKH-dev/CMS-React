import { createPortal } from 'react-dom'
import './EditModal.css'
import { useEffect } from 'react'

export default function EditModal({children,onClose,onSubmit}) {
    
    
    useEffect(()=> {
        function checkKey(event){
            if(event.key === 'Escape'){
               onClose()
            }
        }

        window.addEventListener('keyup',(event) => checkKey(event))

        return () =>  window.removeEventListener('keyup',checkKey)
    })

  return createPortal(
    <div className='modal-parent active'>
        <form action="#" className='edit-modal-form'>
       <h1>اطلاعات جدید را وارد نمایید</h1>

       {children}

       <button className='edit-form-submit' onClick={(event) => onSubmit(event)}>ثبت اطلاعات جدید</button>
        </form>
    </div>,document.getElementById('modals-parent')
  )
}

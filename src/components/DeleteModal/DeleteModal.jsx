import { useEffect } from "react";
import "./DeleteModal.css";
import ReactDOM from 'react-dom'


const deleteHandler = (submit) => {
   submit()
}


export default function DeleteModal({submit,cancel,title}) {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>{title}</h1>
        <div className="delete-modal-buttons">
          <button className="delete-btn delete-modal-accept__btn" onClick={() => deleteHandler(submit)}>بله</button>
          <button className="delete-btn delete-modal-reject__btn" onClick={()=> cancel()}>خیر</button>
        </div>
      </div>
    </div>,document.getElementById('modals-parent')
  );
}

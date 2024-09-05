import "./DeleteModal.css";
import ReactDOM from 'react-dom'
export default function DeleteModal() {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>آیا از حذف اطمینان دارید؟</h1>
        <div className="delete-modal-buttons">
          <button className="delete-btn delete-modal-accept__btn">بله</button>
          <button className="delete-btn delete-modal-reject__btn">خیر</button>
        </div>
      </div>
    </div>,document.getElementById('modals-parent')
  );
}

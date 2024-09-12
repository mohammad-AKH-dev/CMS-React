import { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from '../EditModal/EditModal';
import ErrorBox from "../ErrorBox/ErrorBox";
import "./Comments.css";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [mainComment, setMainComment] = useState(null);
  const [mainCommentID,setMainCommentID] = useState(null)
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal,setIsShowDeleteModal] = useState(false)
  const [isShowEditModal,setIsShowEditModal] = useState(false)
  const [isShowAcceptModal,setIsShowAcceptModal] = useState(false)
  const [isShowRejectModal,setIsShowRejectModal] = useState(false)

  const getAllComments = async () => {
    const res = await fetch("http://localhost:3000/api/comments");
    const comments = await res.json();
    if (comments.length) {
      console.log(comments)
      setAllComments(comments);
    }
  };

//     // {
//     "id": 3,
//     "isAccept": 0,
//     "body": "این محصول خیلی خوب بود. ممنون از سایت خوبتون",
//     "date": "1401-07-01",
//     "hour": "01:19",
//     "userID": "علیرضا",
//     "productID": "تیشرت مشکی"
// }

  useEffect(() => {
    getAllComments();
  }, []);

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const deleteCommentHandler = async () => {
       const res = await fetch(`http://localhost:3000/api/comments/${mainCommentID}`,{
        method: 'DELETE'
       })
       if(res.ok){
        setIsShowDeleteModal(false)
        getAllComments()
       }
  }

  const updateComment = async (event) => {
     event.preventDefault()

     let newCommentBody = {
      body: mainComment
     }
     const res = await fetch(`http://localhost:3000/api/comments/${mainCommentID}`,{
      method:'PUT',
      headers:{
        "Content-type": 'application/json'
      },
      body: JSON.stringify(newCommentBody)
     })
     if(res.ok){
      setMainCommentID(null)
     setMainComment(null)
     setIsShowEditModal(false)
     getAllComments()
     }
  }

  const acceptCommentHandler =  async () => {
     const res = await fetch(`http://localhost:3000/api/comments/accept/${mainCommentID}`,{
      method: 'POST',
     })
     console.log(res)
     if(res.ok){
      setIsShowAcceptModal(false)
      setMainCommentID(null)
      getAllComments()
     }
  }

  const rejectCommentHandler = async () => {
    const res = await fetch(`http://localhost:3000/api/comments/reject/${mainCommentID}`,{
      method:'POST',
    })
    console.log(res)
    if(res.ok){
      setIsShowRejectModal(false)
      setMainCommentID(null)
      getAllComments()
    }
  }

  return (
    <div className="cms-main">
      <h1 className="cms-title">لیست کامنت ها</h1>
      {allComments.length ? (
        <table className="cms-table">
          <tr>
            <th>اسم کاربر</th>
            <th>محصول</th>
            <th>کامنت</th>
            <th>تاریخ</th>
            <th>ساعت</th>
            <th>Actions</th>
          </tr>
          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button
                    className="show-comment__btn"
                    onClick={() => {
                      setMainComment(comment.body);
                      setIsShowDetailsModal(true);
                    }}
                  >
                    دیدن کامنت
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td className="custom-td">
                  <button className="btn btn-danger" onClick={() => {
                    setIsShowDeleteModal(true)
                    setMainCommentID(comment.id)
                  }}>حذف</button>
                  <button className="btn btn-primary" onClick={() => {
                    setIsShowEditModal(true)
                    setMainComment(comment.body)
                    setMainCommentID(comment.id)
                  }}>ویرایش</button>
                  <button className="btn btn-primary">پاسخ</button>

                 {comment.isAccept === 0  ? <button className={`btn btn-warning text-white`} onClick={() => {
                    setIsShowAcceptModal(true)
                    setMainCommentID(comment.id)
                  }}>تایید</button> : <button className={`btn btn-success text-white`} onClick={() => {
                    setIsShowRejectModal(true)
                    setMainCommentID(comment.id)
                  }}>رد</button>}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox message={"هیچ کامنتی یافت نشد"} />
      )}
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <button className="btn btn-close position-absolute" onClick={() => setIsShowDetailsModal(false)}></button>
          <p className="text-modal mb-0">{mainComment}</p>
        </DetailsModal>
      )}

      {isShowDeleteModal && (
        <DeleteModal title={'آیا از حذف اطمینان دارید؟'} submit={deleteCommentHandler} cancel={() => {
          setIsShowDeleteModal(false)
          setMainCommentID(null)
        }}/>
      )}

      {isShowEditModal && <EditModal onClose={() => setIsShowEditModal(false)} onSubmit={updateComment}>
           <textarea className="edit-modal-textarea" value={mainComment} onChange={(e) => setMainComment(e.target.value)}></textarea>
        </EditModal>}
      
      {isShowAcceptModal && <DeleteModal title={'آیا این کامنت را تایید میکنید؟'} submit={acceptCommentHandler} cancel={() => {
        setIsShowAcceptModal(false)
        setMainCommentID(null)
      }}/>}

      {isShowRejectModal && <DeleteModal title={'آیا از رد این کامنت اطمینان دارید؟'} submit={rejectCommentHandler} cancel={() => {
        setIsShowRejectModal(false)
        setMainCommentID(null)
      }}/>}
 
    </div>
  );
}

import { useEffect, useState } from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import './Comments.css'

export default function Comments() {

  const [allComments,setAllComments] = useState([])

  const getAllComments = async () => {
    const res = await fetch('http://localhost:3000/api/comments')
    const comments = await res.json()
    if(comments.length){
      setAllComments(comments)
    }
  }

  useEffect(() => {
       getAllComments()
  },[])

  return (
    <div className='cms-main'>
      {allComments.length ? 
      <table className='cms-table'>
       <tr>
         <th>اسم کاربر</th>
         <th>محصول</th>
         <th>کامنت</th>
         <th>تاریخ</th>
         <th>ساعت</th>
         <th>Actions</th>
       </tr>
      <tbody>
     {allComments.map(comment => (
       <tr key={comment.id}>
         <td>{comment.userID}</td>
         <td>{comment.productID}</td>
         <td><button className='show-comment__btn'>دیدن کامنت</button></td>
         <td>{comment.date}</td>
         <td>{comment.hour}</td>
         <td className='custom-td'>
           <button className='btn btn-danger'>حذف</button>
           <button className='btn btn-primary'>ویرایش</button>
           <button className='btn btn-primary'>پاسخ</button>
           <button className='btn btn-success'>تایید</button>
         </td>
       </tr>
     ))} 
     </tbody>
     </table>
      : <ErrorBox message={'هیچ کامنتی یافت نشد'}/>
    }
      
    </div>
  )
}

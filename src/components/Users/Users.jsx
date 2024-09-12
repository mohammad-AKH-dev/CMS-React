import { useEffect, useState } from "react"
import ErrorBox from "../ErrorBox/ErrorBox"
import DeleteModal from "../DeleteModal/DeleteModal"
import EditModal from "../EditModal/EditModal"
import { AiOutlineDollarCircle } from "react-icons/ai"
import './users.css'

export default function Users() {
  const [allUsers,setAllUsers] = useState([])
  const [mainUserID,setMainUSerID] = useState(null)
  const [isShowDeleteModal,setIsShowDeleteModal] = useState(false)
  const [isShowEditModal,setIsShowEditModal] = useState(false)
  const [firsname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] = useState('')
  const [city,setCity] = useState('')
  const [email,setEmail] = useState('')
  const [address,setAddress] = useState('')
  const [score,setScore] = useState('')
  const [buy,setBuy] = useState('')

  useEffect(() => {
   getAllUsers()
  },[])

//   //  {{
//     "id": 1,
//     "firsname": "علیرضا",
//     "lastname": "احمدی",
//     "username": "alireza_ahmdi19",
//     "password": "19901432",
//     "phone": 9129872314,
//     "city": "تهران",
//     "email": "alireza@gmail.com",
//     "address": "تهران - خیابان فلان - کوچه فلان",
//     "score": 98,
//     "buy": 9000000
// }}

  const getAllUsers = async () => {
    const res = await fetch('http://localhost:3000/api/users')
    const users = await res.json()
     console.log(users)
    if(users.length){
      setAllUsers(users)
    }

  }

  const removeUserHandler = async() => {
     const res = await fetch(`http://localhost:3000/api/users/${mainUserID}`,{
      method:'DELETE'
     })
     console.log(res)
     if(res.ok){
        setIsShowDeleteModal(false)
        setMainUSerID(null)
        getAllUsers()
     }
  }

  const setEditUserInfos = (user) => {
    setFirstname(user?.firsname)
    setLastname(user?.lastname)
    setUsername(user?.username)
    setPassword(user?.password)
    setPhone(user?.phone)
    setCity(user?.city)
    setEmail(user?.email)
    setAddress(user?.address)
    setScore(user?.score)
    setBuy(user?.buy)
  }

  const editUserHandler = async (event) => {
    event.preventDefault()
    let newUserBodyInfos = {
        firsname,
        lastname,
        username,
        password,
        phone,
        city,
        email,
        address,
        score,
        buy
    }

    const res = await fetch(`http://localhost:3000/api/users/${mainUserID}`,{
      method:'PUT',
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify(newUserBodyInfos)
    })

    if(res.ok){
      setIsShowEditModal(false)
      setEditUserInfos(null)
      getAllUsers()
    }
  }
   
   

  return (
    <div className="cms-main">
      <h1 className="cms-title">لیست کاربران</h1>
      {allUsers.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>یوزرنیم</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
            </tr>
          </thead>

          <tbody>
            {allUsers.map(user => (
              <tr key={user.id}>
              <td>{`${user.firsname} ${user.lastname}`}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td className="custom-td">
                <button className="btn btn-danger" onClick={() => {
                  setIsShowDeleteModal(true)
                  setMainUSerID(user.id)
                }}>حذف</button>
                <button className="btn btn-warning text-white">جزییات</button>
                <button className="btn btn-primary" onClick={() => {
                  setIsShowEditModal(true)
                  setMainUSerID(user.id)
                  setEditUserInfos(user)
                  
                }}>ویرایش</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      ): <ErrorBox message={'هیچ کاربری یافت نشد'}/>} 

      {isShowDeleteModal && <DeleteModal title={'آیا از حذف این کاربر اطمینان دارید؟'} submit={removeUserHandler} cancel={() => {
         setIsShowDeleteModal(false)
         setMainUSerID(null)
      }}/>}

      {isShowEditModal && <EditModal onSubmit={editUserHandler} onClose={() => {
        setIsShowEditModal(false)
        setMainUSerID(null)
      }}>
           <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle/>
            </span>
            <input type="text" className="edit-user-info-input" placeholder="نام جدید کاربر  را وارد نمایید"
             value={firsname}
              onChange={(e) => setFirstname(e.target.value)}
            />
           </div>

           <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle/>
            </span>
            <input type="text" className="edit-user-info-input" placeholder="نام خانوادگی جدید را وارد نمایید" 
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
           </div>

           <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle/>
            </span>
            <input type="text" className="edit-user-info-input" placeholder="نام کاربری جدید را وارد نمایید" 
              value={username}
               onChange={(e) => setUsername(e.target.value)}
            />
           </div>

           <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle/>
            </span>
            <input type="text" className="edit-user-info-input" placeholder="پسوورد جدید را وارد نمایید" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           </div>

           <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle/>
            </span>
            <input type="text" className="edit-user-info-input" placeholder="شماره تماس جدید را وارد نمایید"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
           </div>

           <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle/>
            </span>
            <input type="text" className="edit-user-info-input" placeholder="محل زندگی جدید را وارد نمایید" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
           </div>

           <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle/>
            </span>
            <input type="text" className="edit-user-info-input" placeholder="ایمیل جدید را وارد نمایید" 
              value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
           </div>

           <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle/>
            </span>
            <input type="text" className="edit-user-info-input" placeholder="آدرس جدید را وارد نمایید" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
           </div>

           <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle/>
            </span>
            <input type="text" className="edit-user-info-input" placeholder="امتیاز جدید کاربر را وارد نمایید" 
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
           </div>

           <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle/>
            </span>
            <input type="text" className="edit-user-info-input" placeholder="میزان جدید خرید کاربر را وارد نمایید"
              value={buy}
              onChange={(e) => setBuy(e.target.value)}
            />
           </div>
        </EditModal>}
   </div>
  )
}

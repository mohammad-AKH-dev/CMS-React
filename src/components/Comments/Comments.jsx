import DeleteModal from '../DeleteModal/DeleteModal'
import ErrorBox from '../ErrorBox/ErrorBox'
import './Comments.css'

export default function Comments() {
  return (
    <>
      <ErrorBox message={'هیچ کامنتی یافت نشد'}/>
      <DeleteModal/>
    </>
  )
}

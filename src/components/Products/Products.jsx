import './Products.css'
import ErrorBox from '../ErrorBox/ErrorBox'
import AddNewProduct from '../AddNewProduct/AddNewProduct'

export default function Products() {
  return (
    <div>
      <AddNewProduct/>
        <ErrorBox message={'هیچ محصولی یافت نشد'}/>
    </div>
  )
}

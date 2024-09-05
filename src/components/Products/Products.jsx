import './Products.css'
import ErrorBox from '../ErrorBox/ErrorBox'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductsTable from '../ProductsTable/ProductsTable'

export default function Products() {
  return (
    <div>
      <AddNewProduct/>
        <ErrorBox message={'هیچ محصولی یافت نشد'}/>
        <ProductsTable/>
    </div>
  )
}

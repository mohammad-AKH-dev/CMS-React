import './Products.css'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductsTable from '../ProductsTable/ProductsTable'

export default function Products() {
  return (
    <div>
      <AddNewProduct/>
        <ProductsTable/>
    </div>
  )
}

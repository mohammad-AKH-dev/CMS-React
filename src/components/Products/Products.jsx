import "./Products.css";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import { useState } from "react";


export default function Products() {

  const [allProducts, setAllProducts] = useState([]);
  async function getAllProducts() {
    
    const res = await fetch("http://localhost:3000/api/products", {
      method: "GET",
    });
    const products = await res.json();
    if (products.length) {
      setAllProducts(products);
    }
  }

  return (
      <div>
        <AddNewProduct getAllProducts={getAllProducts}/>
        <ProductsTable allProducts={allProducts} getAllProducts={getAllProducts}/>
      </div>
  );
}

import "./AddNewProduct.css";
import { MdTitle } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { RiGalleryFill } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsDatabaseCheck } from "react-icons/bs";
import { GiSellCard } from "react-icons/gi";
import { useState } from "react";



export default function AddNewProduct({getAllProducts}) {
  const [newProductTitle, setNewProductTitle] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductCount, setNewProductCount] = useState('');
  const [newProductImg, setNewProductImg] = useState('');
  const [newProductPopularity, setNewProductPopularity] = useState('');
  const [newProductSale, setNewProductSale] = useState('');
  const [newProductColors, setNewProductColors] = useState('');


  

  const addNewProductHandler = async (event) => {
    event.preventDefault();

    let newProductInfos = {
      title: newProductTitle,
      price: newProductPrice,
      count: newProductCount,
      img: newProductImg,
      popularity: newProductPopularity,
      sale: newProductSale,
      colors: newProductColors
    };
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductInfos),
    });
    if (res.ok) {
      console.log(res);
      setNewProductTitle('')
      setNewProductPrice('')
      setNewProductCount('')
      setNewProductImg('')
      setNewProductPopularity('')
      setNewProductSale('')
      setNewProductColors('')
      getAllProducts()
    }
  };

  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصول جدید</h1>

      <form action="#" className="add-products-form">
        <div className="add-products-form__wrap">
          <div className="add-products-form-group">
            <MdTitle />
            <input
              type="text"
              placeholder="اسم محصول را بنویسید..."
              className="add-products__input"
              value={newProductTitle}
              onChange={(e) => setNewProductTitle(e.target.value)}
            />
          </div>

          <div className="add-products-form-group">
            <BsCurrencyDollar />
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید..."
              className="add-products__input"
              value={newProductPrice}
              onChange={(e) => setNewProductPrice(e.target.value)}
            />
          </div>

          <div className="add-products-form-group">
            <IoBagOutline />
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید..."
              className="add-products__input"
              value={newProductCount}
              onChange={(e) => setNewProductCount(Number(e.target.value))}
            />
          </div>

          <div className="add-products-form-group">
            <BsDatabaseCheck />
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید..."
              className="add-products__input"
              value={newProductImg}
              onChange={(e) => setNewProductImg(e.target.value)}
            />
          </div>

          <div className="add-products-form-group">
            <RiGalleryFill />
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید..."
              className="add-products__input"
              value={newProductPopularity}
              onChange={(e) => setNewProductPopularity(e.target.value)}
            />
          </div>

          <div className="add-products-form-group">
            <GiSellCard />
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید..."
              className="add-products__input"
              value={newProductSale}
              onChange={(e) => setNewProductSale(e.target.value)}
            />
          </div>

          <div className="add-products-form-group">
            <IoColorPaletteOutline />
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید..."
              className="add-products__input"
              value={newProductColors}
              onChange={(e) => setNewProductColors(e.target.value)}
            />
          </div>
        </div>

        <button
          className="add-product__submit"
          onClick={(event) => addNewProductHandler(event)}
        >
          ثبت محصول
        </button>
      </form>
    </div>
  );
}

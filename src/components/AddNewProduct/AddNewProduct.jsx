import './AddNewProduct.css'
import { MdTitle } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { RiGalleryFill } from "react-icons/ri";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsDatabaseCheck } from "react-icons/bs";
import { GiSellCard } from "react-icons/gi";
export default function AddNewProduct() {
  return (
    <div className='products-main'>
      <h1 className='products-title'>افزودن محصول جدید</h1>

      <form action="#" className='add-products-form'>
        <div className="add-products-form__wrap">

            <div className='add-products-form-group'>
                <MdTitle/>
             <input type="text" placeholder='اسم محصول را بنویسید...' className='add-products__input'/>
            </div>

            <div className='add-products-form-group'>
                <BsCurrencyDollar/>
             <input type="text" placeholder='قیمت محصول را بنویسید...' className='add-products__input'/>
            </div>

            <div className='add-products-form-group'>
                 <IoBagOutline/>
             <input type="text" placeholder='موجودی محصول را بنویسید...' className='add-products__input'/>
            </div>

            <div className='add-products-form-group'>
                <BsDatabaseCheck/>
             <input type="text" placeholder='آدرس عکس محصول را بنویسید...' className='add-products__input'/>
            </div>

            <div className='add-products-form-group'>
                <RiGalleryFill/>
             <input type="text" placeholder='میزان محبوبیت محصول را بنویسید...' className='add-products__input'/>
            </div>

            <div className='add-products-form-group'>
                <GiSellCard/>
             <input type="text" placeholder='میزان فروش محصول را بنویسید...' className='add-products__input'/>
            </div>

            <div className='add-products-form-group'>
                <IoColorPaletteOutline/>
             <input type="text" placeholder='تعداد رنگ بندی محصول را بنویسید...' className='add-products__input'/>
            </div>
        </div>

        <button className='add-product__submit'>ثبت محصول</button>
      </form>
    </div>
  )
}

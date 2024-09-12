import { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import { AiOutlineDollarCircle } from "react-icons/ai";

import "./ProductsTable.css";

export default function ProductsTable({allProducts,getAllProducts}) {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [mainProductDetail, setMainProductDetail] = useState({});
  const [mainProductId, setMainProductId] = useState(0);
  const [prevTitle, setPrevTitle] = useState(null);
  const [prevPrice, setPrevPrice] = useState(null);
  const [prevCount, setPrevCount] = useState(null);
  const [prevImg, setPrevImg] = useState(null);
  const [prevPopularity, setPrevPopularity] = useState(null);
  const [prevSale, setPrevSale] = useState(null);
  const [prevColors, setPrevColors] = useState(null);


  

  async function deleteModalSubmitAction() {
    const res = await fetch(
      `http://localhost:3000/api/products/${mainProductId}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      setIsShowDeleteModal(false);
      getAllProducts()
    }
  }

  useEffect(()=> {
       getAllProducts()
  },[])

  function deleteModalCancelAction() {
    setIsShowDeleteModal(false);
    setMainProductId(0);
  }

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
    setMainProductDetail("");
  };

  function closeEditModal ()  {
    setIsShowEditModal(false)
    setMainProductDetail(null);
    setPrevTitle(null)
    setPrevPrice(null)
    setPrevCount(null)
    setPrevImg(null)
    setPrevPopularity(null)
    setPrevSale(null)
    setPrevColors(null)
    setMainProductId(0)
  }

  const updateProductInfos = async (event) => {
    event.preventDefault();
    let newProductInfos = {
      title: prevTitle,
      price: prevPrice,
      count: +prevCount,
      img: prevImg,
      popularity: prevPopularity,
      sale: prevSale,
      colors: prevColors
    }
    const res = await fetch(`http://localhost:3000/api/products/${mainProductId}`,{
      method: 'PUT',
      headers:{
        "Content-type": 'application/json'
      },
      body: JSON.stringify(newProductInfos)
    })

     if(res.ok){
       closeEditModal()
       console.log('updated')
       getAllProducts()
     }

  };

  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>

        <tbody>
          {allProducts.length ? (
            [...allProducts].reverse().map((product) => (
              <tr key={product.id} className="products-table-tr">
                <td>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="products-table-img"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price.toLocaleString()} تومان</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="products-table__btn"
                    onClick={() => {
                      setIsShowDetailsModal((prevState) => !prevState);
                      setMainProductDetail(product);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="products-table__btn"
                    onClick={() => {
                      setIsShowDeleteModal((prevState) => !prevState);
                      setMainProductId(Number(product.id));
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="products-table__btn"
                    onClick={() => {
                      setIsShowEditModal((prevState) => !prevState);
                      setMainProductDetail(product);
                      setMainProductId(product.id)
                      setPrevTitle(product.title)
                      setPrevPrice(product.price)
                      setPrevCount(product.count)
                      setPrevImg(product.img)
                      setPrevPopularity(product.popularity)
                      setPrevSale(product.sale)
                      setPrevColors(product.colors)
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <ErrorBox message={"هیچ محصولی یافت نشد"} />
          )}
        </tbody>
      </table>
      {isShowDeleteModal ? (
        <DeleteModal
          title={'آیا از حذف اطمینان دارید؟'}
          submit={deleteModalSubmitAction}
          cancel={deleteModalCancelAction}
        />
      ) : (
        ""
      )}
      {isShowDetailsModal ? (
        <DetailsModal onHide={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>محبوبیت</th>
                <th>فروش</th>
                <th>رنگ بندی</th>
              </tr>
            </thead>

            <tbody>
              <td>{mainProductDetail.popularity}</td>
              <td>{mainProductDetail.sale.toLocaleString()} تومان</td>
              <td>{mainProductDetail.colors}</td>
            </tbody>
          </table>
        </DetailsModal>
      ) : (
        ""
      )}
      {isShowEditModal ? (
        <EditModal
          onClose={closeEditModal}
          onSubmit={updateProductInfos}
        >
          {/* {children} */}
          <div className="edit-products-form__group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="عنوان جدید را وارد کنید..."
              value={prevTitle}
              onChange={(event) => setPrevTitle( event.target.value)}
            />
          </div>

          <div className="edit-products-form__group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="قیمت جدید را وارد کنید..."
              value={prevPrice}
              onChange={(event) => setPrevPrice( event.target.value)}
            />
          </div>

          <div className="edit-products-form__group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="موجودی جدید را وارد کنید..."
              value={prevCount}
              onChange={(event) => setPrevCount( event.target.value)}
            />
          </div>

          <div className="edit-products-form__group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="  کاور جدید را وارد کنید..."
              value={prevImg}
              onChange={(event) => setPrevImg( event.target.value)}
            />
          </div>

          <div className="edit-products-form__group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="میزان محبوبیت جدید را وارد کنید..."
              value={prevPopularity}
              onChange={(event) => setPrevPopularity( event.target.value)}
            />
          </div>

          <div className="edit-products-form__group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="میزان فروش جدید را وارد کنید..."
              value={prevSale}
              onChange={(event) => setPrevSale( event.target.value)}
            />
          </div>

          <div className="edit-products-form__group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-product-input"
              placeholder="رنگ بندی جدید را وارد کنید..."
              value={prevColors}
              onChange={(event) => setPrevColors( event.target.value)}
            />
          </div>
        </EditModal>
      ) : (
        ""
      )}
    </>
  );
}




// ProductsTable.propTypes = {
//   allProducts: [],
//   getAllProducts: function
// }
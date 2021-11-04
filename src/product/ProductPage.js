import React, { useEffect } from 'react'
import { useLocation } from 'react-router';

export default function ProductPage(props) {

  // useEffect(() =>{
  //    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
  //            .then(response => {
  //                setProduct(response.data[0])
  //            })
  //  },[])
  const location = useLocation();
  const item = location.state.item;
  return (
    <div>
      ProductPage<br />
      {JSON.stringify(item)}
    </div>
  )
}
//export default ProductPage
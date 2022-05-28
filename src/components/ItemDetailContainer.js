import React, { useEffect, useState } from 'react'
// import ItemCount from './ItemCount';
import getData from '../utils/promise';
import ItemDetail from './ItemDetail';
const { products } = require('../utils/products');

function ItemDetailContainer() {
    const [itemDetail, setitemDetail] = useState([]);

    useEffect(() => {
        getData(2000, products[8])
          .then(result => setitemDetail(result))
          .catch(error => console.log(error))
      }, []);

    console.log(typeof(products[8]))

  return (
    <div class=" flex justify-center">
        {
          <ItemDetail item={itemDetail}/>
        }
    </div>
  )
}

export default ItemDetailContainer
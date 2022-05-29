import React, { useEffect, useState } from 'react'
import getData from '../utils/promise';
import ItemDetail from './ItemDetail';
const { products } = require('../utils/products');

function ItemDetailContainer() {
    const [itemDetail, setitemDetail] = useState([]);

    useEffect(() => {
        getData(2000, products[11])
          .then(result => setitemDetail(result))
          .catch(error => console.log(error))
      }, []);

  return (
    <div class=" flex justify-center">
        {
          <ItemDetail item={itemDetail}/>
        }
    </div>
  )
}

export default ItemDetailContainer
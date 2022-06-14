import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
const { firestoreFetchOne } = require('../utils/firestoreFetch');

function ItemDetailContainer() {
    const [itemDetail, setitemDetail] = useState([]);
    // HOOK: Me devuelve el valor de la variable de la url a la que quiere acceder el usuario
    const { id } = useParams();

    useEffect(() => {
        // Podria hacer directamente products[id] si el id fuera alfanumerico
        // getData(2000, products.find(item => item.id === id))
        //   .then(result => setitemDetail(result))
        //   .catch(error => console.log(error))
        firestoreFetchOne(id)
          .then(result => setitemDetail(result))
          .catch(err => console.log(err))
      },[id]);

  return (
    <div class=" flex justify-center">
        {
          <ItemDetail item={itemDetail}/>
        }
    </div>
  )
}

export default ItemDetailContainer
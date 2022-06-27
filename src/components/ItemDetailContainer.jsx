import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
const { firestoreFetchOne } = require('../utils/firestoreFetch');

function ItemDetailContainer() {
    const [itemDetail, setitemDetail] = useState([]);
    // HOOK useParams: Me devuelve el valor de la variable de la url a la que quiere acceder el usuario
    const { id } = useParams();

    useEffect(() => {
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
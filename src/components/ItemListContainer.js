import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import promise from '../utils/promise';
import ItemList from './ItemList';
const { products } = require('../utils/products');


function ItemListContainer() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    promise(2000, products)
      .then(result => setDatos(result))
      .catch(error => console.log(error))
  }, []);

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.")
  }
  
  return (
    <div class="justify-items-center">
      <ItemList items={datos}/>
      <ItemCount stock={3} initial={0} onAdd={onAdd}></ItemCount>
    </div>
        
  )
}

export default ItemListContainer
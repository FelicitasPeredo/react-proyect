import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import getData from '../utils/promise';
import ItemList from './ItemList';
const { products } = require('../utils/products');


function ItemListContainer() {
  const [listaProductos, setlistaProductos] = useState([]);

  // Este hook me permite hacer tareas secundarias del componente, 
  // en este caso ejecuta la promesa mientras carga la app
  // Sirve mucho para peticiones a APIs
  useEffect(() => {
    getData(2000, products)
      //La promise me devuelve la data, 
      //la almaceno utilizando un useState, para que cuando se cambie el valor lo renderice instantaneamente
      .then(result => setlistaProductos(result))
      .catch(error => console.log(error))
  }, []);
  // El array de dependencia marca cuando el useeffect se debe ejecutar, sino quedaria en loop infinito
  // Si esta vacio le estoy marcando que se ejecute una sola vez cuando se monta el componente
  // Si le pongo una variable le estoy marcando que escuche cuando cambia o se actualiza esa variable y ejecuta el codigo interno
  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.")
  }
  
  return (
    <div class="justify-items-center">
      <ItemList items={listaProductos}/>
      <ItemCount stock={3} initial={0} onAdd={onAdd}></ItemCount>
    </div>
        
  )
}

export default ItemListContainer
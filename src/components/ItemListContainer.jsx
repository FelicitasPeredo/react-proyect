import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
const { firebaseFetch } = require('../utils/firestoreFetch');

function ItemListContainer() {
  const [listaProductos, setlistaProductos] = useState([]);
  const { id } = useParams();

  // Este hook me permite hacer tareas secundarias del componente, 
  // en este caso ejecuta la promesa mientras carga la app
  // Sirve mucho para peticiones a APIs
  // useEffect(() => {
    // id === undefined
    // ?  getData(2000, products)
      //La promise me devuelve la data, 
      //la almaceno utilizando un useState, para que cuando se cambie el valor lo renderice instantaneamente
      // .then(result => setlistaProductos(result))
      // .catch(error => console.log(error))
    // : getData(2000, products.filter(item => item.categoria === id))
      //La promise me devuelve la data, 
      //la almaceno utilizando un useState, para que cuando se cambie el valor lo renderice instantaneamente
      // .then(result => setlistaProductos(result))
      // .catch(error => console.log(error))
  // }, [id]);
  // El array de dependencia marca cuando el useeffect se debe ejecutar, sino quedaria en loop infinito
  // Si esta vacio le estoy marcando que se ejecute una sola vez cuando se monta el componente
  // Si le pongo una variable le estoy marcando que escuche cuando cambia o se actualiza esa variable y ejecuta el codigo interno

  useEffect(() => {
    firebaseFetch(id)
      .then(result => setlistaProductos(result))
      .catch(err => console.log(err))
  }, [id])
  
  
  return (
    <div class="justify-items-center">
      <ItemList items={listaProductos}/>
    </div>
        
  )
}

export default ItemListContainer
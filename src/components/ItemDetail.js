import React from 'react'
import ItemCount from './ItemCount'


function ItemDetail({ item }) {
  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.")
  }

  return (
    <>
    {
      item.image
      ?
      <div class="card w-7/12 h-96 card-side bg-base-100 shadow-xl p-1 m-5 justify-center">
        <figure><img src={item.image} alt='Product'/></figure>
        <div class="card-body">
          <h2 class="card-title text-2xl place-self-center">{item.name}</h2>
          <p class="place-self-center">{item.description}</p>
          <p class="place-self-center text-xl">${item.cost}</p>
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd}></ItemCount>
        </div>
      </div>
      : <p>Cargando...</p>
    }
    </>
  )
}

export default ItemDetail


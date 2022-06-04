import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function ItemDetail({ item }) {
  const [itemCount, setitemCount] = useState(0)

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.")
    setitemCount(qty)
  }

  return (
    <>
    {
      item.image
      ?
      <div class="card w-7/12 h-96 card-side bg-base-100 shadow-xl p-1 m-6 justify-center">
        <figure><img src={item.image} alt='Product'/></figure>
        <div class="card-body">
          <h2 class="card-title text-2xl place-self-center">{item.name}</h2>
          <p class="place-self-center">{item.description}</p>
          <p class="place-self-center text-xl">${item.cost}</p>
          {
            itemCount === 0
            ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd}></ItemCount>
            : <Link to='/cart'><div class='btn-group justify-center'><button class="btn btn-accent btn-lg">Checkout</button></div></Link>
          }
        </div>
      </div>
      : <p>Cargando...</p>
    }
    </>
  )
}

export default ItemDetail


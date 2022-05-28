import React from 'react'
import ItemCount from './ItemCount'


function ItemDetail({item}) {
  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.")
  }

  return (
    <div class="card w-7/12 h-96 card-side bg-base-100 shadow-xl p-1 m-5 justify-center">
      <figure><img src={item.image} alt='Product'/></figure>
      <div class="card-body content-center">
        <h2 class="card-title">{item.name}</h2>
        <p >{item.description}</p>
        <p >${item.cost}</p>
        <ItemCount stock={item.stock} initial={0}></ItemCount>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" onClick={onAdd}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
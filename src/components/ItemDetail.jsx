import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import Spinner from './Spinner'


function ItemDetail({ item }) {
  const [itemCount, setitemCount] = useState(0)
  const global = useContext(CartContext)

  const onAdd = (qty) => {
    setitemCount(qty)
    // agregar el producto al carrito, llamo a la funcion global para poder pasar el item a el cart
    global.AddToCart(item, qty)
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
            : 
            <>
              <Link to='/cart'><div class='btn-group justify-center'><button class="btn btn-accent">Checkout</button></div></Link>
              <Link to='/'><div class='btn-group justify-center'><button class="btn btn-secondary">Continue Shopping</button></div></Link>
            </>
          }
        </div>
      </div>
      : <Spinner/>
    }
    </>
  )
}

export default ItemDetail


import React from 'react'
import Item from './Item'
import Spinner from './Spinner'

function ItemList({ items }) {
  return (
    <div class="grid grid-cols-3 gap-4 justify-items-center">
        {
          // Chequeo que la lista de productos no este vacia
          items.length > 0
          // Por cada producto de la lista de productos devuelvo un componente Item con sus correspondientes props
          ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost} picture={item.image}/>)
          //Mientras espero a que la promise se cumpla se renderiza el spinner
          : <Spinner/>
        }
    </div>
  )
}

export default ItemList
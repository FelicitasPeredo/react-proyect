import React from 'react'
import Item from './Item'

function ItemList({ items }) {
  return (
    <div class="grid grid-cols-3 gap-4 justify-items-center">
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.name} price={item.cost} picture={item.image} stock={item.stock}/>)
            : <p>Cargando...</p>
        }
    </div>
  )
}

export default ItemList
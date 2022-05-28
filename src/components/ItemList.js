import React from 'react'
import Item from './Item'

function ItemList({ items }) {
  return (
    <div class="grid grid-cols-3 gap-4 justify-items-center">
        {
          // Chequeo que la lista de productos no este vacia
          items.length > 0
          // Por cada producto de la lista de productos devuelvo un componente Item con sus correspondientes props
          ? items.map(item => <Item key={item.id} title={item.name} price={item.cost} picture={item.image} stock={item.stock}/>)
          
          : <p>Cargando...</p>
        }
    </div>
  )
}

export default ItemList
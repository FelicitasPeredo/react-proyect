import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer() {
  return (
    <div>
      <ItemCount stock={3} initial={0}></ItemCount>
    </div>
        
  )
}

export default ItemListContainer
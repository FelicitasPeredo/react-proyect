import React from 'react'

function Badge() {
  return (
    <span class="badge badge-sm indicator-item">{global.calcItemsQty()}</span>
  )
}

export default Badge
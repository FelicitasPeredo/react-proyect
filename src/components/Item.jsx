import React from 'react'
import { Link } from 'react-router-dom'

function Item({id, picture, title, price}) {
  return (
        <div class="card w-96 bg-base-100 shadow-xl m-3">
            <figure class="px-10 pt-10">
                <img src={picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>${price}</p>
                <div class="card-actions">
                    <button class="btn btn-secondary"><Link to={`/item/${id}`}>Buy Now</Link></button>
                </div>
            </div>
        </div>
  )
}

export default Item
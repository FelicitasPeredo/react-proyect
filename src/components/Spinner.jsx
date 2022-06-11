import React from 'react'

function Spinner() {
  return (
      <>
        <div class='w-1/3 h-96 m-6'></div>
        <progress class="progress progress-secondary w-56 m-5 place-self-center"></progress>
        <div class='w-1/3 h-96 m-6'></div>
      </>
  )
}

export default Spinner
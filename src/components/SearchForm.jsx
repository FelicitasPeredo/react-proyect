import React from 'react'

function SearchForm() {
    // const vocals = [65, 69, 73, 79, 85]

    // const handleKeyDown = (e) => {
    //     if (vocals.includes(e.keyCode)) {
    //         e.preventDefault();
    //         console.log('No se puede presionar vocales.')
    //     }
    // }

  return (
    <div class="navbar-end p-2">
        <div class="form-control">
            <div class="input-group">
                <input type="text" placeholder="Search…" class="input input-bordered"/>
                <button class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SearchForm
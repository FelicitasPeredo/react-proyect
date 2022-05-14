import React from 'react'

const Navbar = () => {
  return (
    <div class="navbar bg-primary text-primary-content">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary text-secondary-content rounded-box w-52">
                    <li><a>Home</a></li>
                    <li tabindex="0">
                        <span>Productos</span>
                        <ul class="rounded-box p-2 bg-secondary text-secondary-content">
                        <li><a>Aros</a></li>
                        <li><a>Collares</a></li>
                        <li><a>Anillos</a></li>
                        </ul>
                    </li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
        </div>
        <div class="navbar-center">
            <p class="btn btn-ghost normal-case text-xl">Olhos de Agua</p>
        </div>
        <div class="navbar-end p-2">
            <div class="form-control">
                <div class="input-group">
                    <input type="text" placeholder="Search…" class="input input-bordered" />
                    <button class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end p-1">
            <label tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span class="badge badge-sm indicator-item">2</span>
                </div>
            </label>
            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div class="card-body">
                <span class="font-bold text-lg">8 Items</span>
                <span class="text-info">Subtotal: $999</span>
                <div class="card-actions">
                    <button class="btn btn-primary btn-block">View cart</button>
                </div>
                </div>
            </div>
            </div>
            <div class="dropdown dropdown-end p-1">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" alt="avantar"/>
                </div>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary text-secondary-content rounded-box w-52">
                <li><a>Profile</a></li>
                <li><a>My Orders</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
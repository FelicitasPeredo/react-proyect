import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div class="navbar bg-primary text-primary-content justify-between">
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
                        <li><a><Link to='/category/aros'>Aros</Link></a></li>
                        <li><a><Link to='/category/collares'>Collares</Link></a></li>
                        <li><a><Link to='/category/anillos'>Anillos</Link></a></li>
                        </ul>
                    </li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
        </div>
        <div class="navbar-center">
            <button class="btn btn-ghost normal-case text-xl"><Link to='/'>OLHOS DE AGUA</Link></button>
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
            <CartWidget></CartWidget>
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
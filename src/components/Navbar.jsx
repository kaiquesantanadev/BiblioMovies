import React from 'react'
import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearch } from "react-icons/bi"

import "./NavBar.css"

const Navbar = () => {
  return (
    <div>
        <nav id="navbar">
            <h2>
            <Link to="/"> <BiCameraMovie /> Bibliomovies</Link>
            </h2>
            <form>
              <input type="text" placeholder='Buscar um filme' />
              <button type="submit"><BiSearch /></button>
            </form>
        </nav>
    </div>
  )
}

export default Navbar
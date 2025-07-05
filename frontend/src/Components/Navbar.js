import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <Link className="navbar-brand text-light" to="/">Jai's Holidays</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-light" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/guides">Guides</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
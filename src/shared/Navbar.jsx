import {  NavLink } from "react-router-dom"
import '../components/style.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
    <div className="container">
      <NavLink className="navbar-brand fw-bold" to="/">
      <div className="navbar-logo" >
        
      </div>
        {/* The Sky Hotel */}
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/lounge"
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Lounge
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/bookings"
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Bookings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

import { NavLink } from "react-router-dom"

export default function Navbar(){
  return(
    <div className="navbar">
      <NavLink className={({ isActive }) => isActive ? "active" : "inactive"} to="/login">Login</NavLink>
    </div>
  )
}
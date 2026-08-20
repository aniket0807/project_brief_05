import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Inventory Management System</h2>

      <div>
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/dashboard">Dashboard</NavLink>{" "}
        <NavLink to="/profile">Profile</NavLink>{" "}
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Inventory Management System</h2>
      </div>

      <div className="navbar-links">
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/dashboard" className={navLinkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/profile" className={navLinkClass}>
          Profile
        </NavLink>
        <NavLink to="/login" className={navLinkClass}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
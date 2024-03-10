import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink>
          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>
        </div>
      </div>
        <NavLink className="nav-item nav-link" to="/search">
            Search
        </NavLink>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 align-content-end" >
        <ul className="navbar-nav ml-auto">
          <button className="nav-item nav-link btn" to="/login">
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

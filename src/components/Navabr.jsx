import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/authentication");
  };

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-info" to="/">
          Employee Management
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/addemployee">
                    Add Employee
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/viewemployee">
                    View Employees
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dash Board
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link text-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {!token && (
              <li className="nav-item">
                <Link className="nav-link" to="/authentication">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { Link, Outlet, useNavigate } from "react-router-dom";

function Mainlayout() {
    const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/authentication");
  };
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-info" to="/">
          Employee Management
        </Link>

        {/* ✅ Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"   // must match the id below
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
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
    <Outlet/>
     <footer className="navbar text-dark py-2 mt-5 footerone">
      <div className="container text-center d-flex justify-content-between footerrr">
        {/* Footer Text */}
        <p className="mb-2 head">
          Developed by <strong>Lavanya Pondru</strong>
        </p>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-5 text-dark">
          <a
            href="https://github.com/Lavanyapondru"
            target="_blank"
            rel="noreferrer"
            className="text-dark text-decoration-none fs-6">
            <i className="bi bi-github me-2"></i>Github Profile 
          </a>
          <a
            href="https://www.linkedin.com/in/lavanya-pondru-b49a8b30b/"
            target="_blank"
            rel="noreferrer"
            className="text-dark text-decoration-none"
          >
            <i className="bi bi-linkedin me-2"></i>Linkedin Profile
          </a>
        </div>
      </div>
    </footer>
        </div>
     );
}

export default Mainlayout;
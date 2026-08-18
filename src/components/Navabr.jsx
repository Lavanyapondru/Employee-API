import { Link } from "react-router-dom";

function Navbar() {
  const isAuthenticated =
    localStorage.getItem("token") &&
    localStorage.getItem("username") &&
    localStorage.getItem("password"); 

  return (
    <div>
      {/* <div className="container"> */}
       <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MyApp
        </Link>

         {/* Hamburger button */}
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

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {/* Always visible links */}
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="/authentication">
              Login
              </a>
            </li>
 


            {/* ✅ Only visible when authenticated */}
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/addemployee">
                    Add Employee
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/viewemployee">
                    View Employee
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                  Dash Board
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
    {/* </div> */}
    </div>
  );
}

export default Navbar;

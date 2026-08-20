import { useNavigate } from "react-router-dom";
// import Navbar from "./Navabr";

function Dashboard() {
    const nav = useNavigate();
    const handlelogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        // alert("logout successfully");
        nav("/authentication");

    }
    return ( 
        <div>
            {/* <Navbar/> */}
            <div className="container">
  <div className="d-flex justify-content-between my-3 dashboard flex-column flex-lg-row">
    
    {/* ✅ Buttons visible only on mobile/tablet */}
    <div className="mb-3 d-block d-lg-none text-center">
      <a href="/" className="btn btn-outline-info me-2">
        Home
      </a>
      <a href="/addemployee" className="btn btn-outline-success me-2">
        Add Employee
      </a>
      <a href="/viewemployee" className="btn btn-outline-primary">
        View Employee
      </a>
    </div>

   
  </div>
</div>

            <div className="container">
                <div className="d-flex justify-content-between dashboard">
                <h1 className="text-center fst-italic">Welcome to the Admin Dashboard</h1>
                <button onClick={handlelogout}  className="logout btn btn-info btn-aqua text-decoration-none text-center mt-3">Log Out</button>
                </div>
            </div>
        </div>
     );
}

export default Dashboard;
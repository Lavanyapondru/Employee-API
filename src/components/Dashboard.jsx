import { useNavigate } from "react-router-dom";
import Navbar from "./Navabr";

function Dashboard() {
    const nav = useNavigate();
    const handlelogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        alert("logout successfully");
        nav("/authentication");

    }
    return ( 
        <div>
            <Navbar/>
            <div className="container">
                <div className="d-flex justify-content-between my-5">
                <h1 className="text-center fst-italic">Welcome to the Admin Dashboard</h1>
                <button onClick={handlelogout}  className="btn btn-info btn-aqua text-decoration-none text-center mt-3 btn-lg">Log Out</button>
                

                </div>
            </div>
        </div>
     );
}

export default Dashboard;
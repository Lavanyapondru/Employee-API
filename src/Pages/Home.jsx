  import axios from "axios";
  import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

  function Home() {
    const [employees, setEmployees] = useState([]);
      const [loading, setLoading] = useState(true);
      const [showAll, setShowAll] = useState(false); // toggle state
let nav = useNavigate();
    useEffect(() => {
      axios.get("https://6a7aab0d8c69b3eb4a175f37.mockapi.io/workersupdates")
        .then((res) => {
          setEmployees(res.data)
        setLoading(false);
        }).catch((err) =>{
          console.error("Error fetching data:", err)
          setLoading(false);
        } );
    }, []);


    const viewsingleemployee = (id) => {

        nav(`/view/${id}`);

    }
      return ( 
          <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <h1 className="navbar-brand">Employee Portal</h1>

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

            {/* Collapsible nav links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link text-light" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/addemployee">Add Employee</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/viewemployee">View Employee</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Banner */}
        <header className="bg-light text-dark py-5 text-center">
          <div className="container py-4">
            <h1 className="display-4 weight">Welcome to Employee Management</h1>
            <p className="lead mt-3">
              Manage employee details easily — add new employees, view records, and keep track of important information in one place.
            </p>
          </div>
        </header>


      
  
      
      

      {/* Employee Records */}
      <div className="container my-5">
        <div className="text-center mt-2 d-flex justify-content-between mb-5">
        <h2 className="text-center">Employee Records</h2>
       <button className="btn btn-aqua" onClick={() => setShowAll(!showAll)}>

                {showAll ? "Show Less Records" : "View All Employee Records"}
              </button>
            </div>
        {loading ? (
          <p className="text-center fs-5 text-muted">Loading employee Records...</p>
        ) : (
          <>
            <div className="row justify-content-center align-items-center">
              {(showAll ? employees : employees.slice(0, 6)).map((emp) => (
                <div key={emp.id} className="col-md-4 col-sm-6 mb-5">
                  <div className="card employee-card shadow-sm h-100">
                    <div className="card-body">
                      <p className="card-title text-dark">
                        <strong className="fs-6">Name: </strong>
                       <a href="" className="text-decoration-none text-dark" onClick={() => viewsingleemployee(emp.id)}><span className="fs-6">{emp.name}</span></a>
                      </p>
                      <p className="card-text "><strong>Phone:</strong> {emp.phonenumber}</p>
                      <p className="card-text"><strong>Project:</strong> {emp.projectname}</p>
                      <p className="card-text">
                        <strong>Salary:</strong>{" "}
                        {Number(emp.salary).toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </p>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Toggle Button */}
            
          </>
        )}
      </div>
      <Footer/>
   
          </div>

        

      );
  }

  export default Home;
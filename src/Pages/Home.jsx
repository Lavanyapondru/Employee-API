  import axios from "axios";
  import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navabr";

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
             {/* <Navbar/> */}

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
   <button
  className="btn btn-aqua login"
  onClick={() => {
    const token = localStorage.getItem("token");
    if (token) {
      setShowAll(!showAll); // ✅ show records if logged in
    } else {
      nav("/authentication"); // ✅ redirect if not logged in
    }
  }}
>
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
      {/* <Footer/> */}
   
          </div>

        

      );
  }

  export default Home;
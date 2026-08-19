import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navabr"; 
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function AddEmployee() {
  const nav = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // form states
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [location, setLocation] = useState("");
  const [workingdate, setWorkingdate] = useState("");
  const [employeetype, setEmployeetype] = useState("");
  const [projectname, setProjectname] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    // ✅ check token on mount
    const token = localStorage.getItem("token");
    if (!token) {
      // alert("Please login first");   // 🚫 show alert
      nav("/authentication");        // redirect to login
    } else {
      setIsLoggedIn(true);           // ✅ allow form
    }

    // fetch employees
    setLoading(true);
    axios
      .get("https://6a7aab0d8c69b3eb4a175f37.mockapi.io/workersupdates")
      .then((res) => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [nav]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://6a7aab0d8c69b3eb4a175f37.mockapi.io/workersupdates", {
        name,
        phonenumber,
        location,
        workingdate,
        employeetype,
        projectname,
        salary,
      })
      .then((res) => {
        setEmployees([...employees, res.data]);
        setName("");
        setPhonenumber("");
        setLocation("");
        setWorkingdate("");
        setEmployeetype("");
        setProjectname("");
        setSalary("");
        alert("Employee added successfully");
        nav("/viewemployee");
      })
      .catch(() => alert("Error adding employee"));
  };

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        {isLoggedIn && (
          <div className="card shadow-lg rounded-4 mb-5 employee-form-card">
            <div className="card-header bg-dark text-light text-center py-3 bg-aqua navbar">
              <h2 className="mb-0">Add Employee</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="row g-3">
                {/* form fields */}
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control border-secondary border-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control border-secondary border-2"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control border-secondary border-2"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Working Date</label>
                  <input
                    type="date"
                    className="form-control border-secondary border-2"
                    value={workingdate}
                    onChange={(e) => setWorkingdate(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Employee Type</label>
                  <select
                    className="form-select border-secondary border-2"
                    value={employeetype}
                    onChange={(e) => setEmployeetype(e.target.value)}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Worker">Worker</option>
                    <option value="Sharing Partner">Sharing Partner</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Project Name</label>
                  <input
                    type="text"
                    className="form-control border-secondary border-2"
                    value={projectname}
                    onChange={(e) => setProjectname(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Salary</label>
                  <input
                    type="text"
                    className="form-control border-secondary border-2"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-aqua">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default AddEmployee;

// ViewEmployee.js
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navabr";

function ViewEmployee() {
  const { id } = useParams(); // get employee id from URL
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://6a7aab0d8c69b3eb4a175f37.mockapi.io/workersupdates/${id}`)
      .then((res) => {
        setEmployee(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching employee:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center fs-5 text-muted">Loading employee details...</p>;
  }

  if (!employee) {
    return <p className="text-center text-danger">Employee not found.</p>;
  }

  return (
    <div>

   <Navbar/>
    <div className="container my-5">
       
      <h2 className="text-center mb-5 singletitle">Employee Details</h2>
      <div className="card single shadow-sm p-4 mt-3 text-center">
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Phone:</strong> {employee.phonenumber}</p>
        <p><strong>Project:</strong> {employee.projectname}</p>
        <p><strong>Salary:</strong> {Number(employee.salary).toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}</p>
        <p><strong>Location:</strong> {employee.location}</p>
        <p><strong>Working Date:</strong> {new Date(employee.workingdate).toLocaleDateString("en-GB")}</p>
        <p><strong>Type:</strong> {employee.employeetype}</p>
      </div>
    </div>
     </div>
  );
}

export default ViewEmployee;

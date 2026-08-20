import axios from "axios";
import { useEffect, useState } from "react";
// import Navbar from "./Navabr"; 
import { MaterialReactTable } from "material-react-table";
import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";

function ViewEmployee() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ login state
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // alert("Please login first"); // 🚫 show alert
      navigate("/authentication"); // redirect to login
    } else {
      setIsLoggedIn(true); // ✅ allow page
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
  }, [navigate]);

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios
        .delete(
          `https://6a7aab0d8c69b3eb4a175f37.mockapi.io/workersupdates/${id}`
        )
        .then(() => {
          setEmployees(employees.filter((emp) => emp.id !== id));
          alert("Employee deleted successfully");
        })
        .catch(() => alert("Error deleting employee"));
    }
  };

  const columns = [
    { accessorKey: "id", header: "ID" },
    {
      accessorKey: "name",
      header: "Name",
      Cell: ({ row }) => (
        <span
          className="text-secondary fw-bold"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/view/${row.original.id}`)}
        >
          {row.original.name}
        </span>
      ),
    },
    { accessorKey: "phonenumber", header: "Phone" },
    { accessorKey: "location", header: "Location" },
    {
      accessorKey: "workingdate",
      header: "Working Date",
      Cell: ({ cell }) =>
        new Date(cell.getValue()).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
    },
    { accessorKey: "employeetype", header: "Type" },
    { accessorKey: "projectname", header: "Project" },
    {
      accessorKey: "salary",
      header: "Salary",
      Cell: ({ cell }) =>
        Number(cell.getValue()).toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        }),
    },
    {
      accessorKey: "actions",
      header: "Actions",
      Cell: ({ row }) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteEmployee(row.original.id)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container my-5">
        {isLoggedIn && (
          <>
            {loading ? (
              <p className="text-center">Loading employees...</p>
            ) : (
              <MaterialReactTable
                columns={columns}
                data={employees}
                enablePagination
                enableSorting
                enableColumnFilters
                muiTableProps={{
                  sx: {
                    border: "2px solid #80deea",
                    backgroundColor: "#ffffff",
                  },
                }}
                muiTableHeadCellProps={{
                  sx: {
                    backgroundColor: "#4dd0e1",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  },
                }}
                muiTableBodyCellProps={{
                  sx: {
                    fontSize: "0.95rem",
                    padding: "12px",
                    color: "#004d40",
                  },
                }}
                muiTableBodyRowProps={{
                  sx: {
                    "&:hover": {
                      backgroundColor: "#e0f7fa",
                    },
                  },
                }}
              />
            )}
          </>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ViewEmployee;

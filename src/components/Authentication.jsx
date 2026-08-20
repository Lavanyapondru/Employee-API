import { useEffect, useState } from "react";
// import Navbar from "./Navabr";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";

function Authentication() {
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");   // ✅ state for inline message
    const [isError, setIsError] = useState(false); // ✅ track success vs error

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://dummyjson.com/auth/login",
      {
        username: username, // or use state variable
        password: password,
        expiresInMins: 30,
      },
      { withCredentials: true } // config object
    );

    localStorage.setItem("token", res.data.accessToken);
    localStorage.setItem("username", res.data.username)
    localStorage.setItem("password",res.data.password)

    setMessage("✅ Login successfully");
setIsError(false);
 setTimeout(() => nav("/dashboard"), 1500);
  } catch (error) {
  setMessage("❌ Login failed");
    setIsError(true);
  }
};

 

    return ( 
        <div>
  
      {/* <Navbar /> */}
      <div className="container">
        <h1 className="text-center fs-4 my-5">Token Based Authentication</h1>
        <div className="d-flex justify-content-center align-items-center">
          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded bg-white shadow w-25 formauthentication"
          >
            <h2 className="text-center mb-4">Login Form</h2>

            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-info w-100 btn-aqua">
              Submit
            </button>

            {message && (
              <div
                className={`mt-3 text-center fw-bold fs-5 ${
                  isError ? "text-danger" : "text-success"
                }`}
              >
                {message}
                </div>
            )}
          </form>
        </div>
      </div>
   
        </div>
     );
}

export default Authentication;
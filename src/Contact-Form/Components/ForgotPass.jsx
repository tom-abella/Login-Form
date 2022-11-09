import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useUserAuth();
  const navigate = useNavigate();

  //delay
  function proceed(){
    navigate("/")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(email)
    toast.info("Check your inbox for further instruction")
    setTimeout(proceed, 6000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div className="card wrapper">
        <div className="card-body">
      <div className="p-4 box">
        <h2 className="mb-3">Forgot Password</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
        <div className="form-group mb-3"  controlid="formBasicEmail">
            <input
                className="form-control"
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="Submit">
              Reset Password
            </button>
          </div>
        </form>
        <div className="mt-2 text-center">
            <Link to="/">Login</Link>
      </div>
        <hr />
      </div>
      <div className="mt-2 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      </div>
      </div>
      <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"/>
    </>
  );
};

export default ForgotPass;
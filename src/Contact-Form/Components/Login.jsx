import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    //delay to proceed
    function proceed(){
      navigate("/home")
    }

    try {
      await logIn(email, password);
      toast.success("Login Complete!")
      setTimeout(proceed, 5000);
    } catch (err) {
      toast.error("User Not Found!")
      setError(err.message);
      
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <div className="card wrapper">
        <div className="card-body">
      <div className="p-4 box">
        <h2 className="mb-3">Log In</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
            <input
                className="form-control"
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <input
                className="form-control"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="Submit">
              Log In
            </button>
          </div>
        </form>
        <div className="my-3 text-center">
        <Link to="/forgot-pass">Forgot Password?</Link>
      </div>
        <hr />
       
        <div>
          <GoogleButton
            className="g-btn w-100"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="mt-2 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
      </div>
      <ToastContainer 
          position="top-center"
          autoClose={4000}
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

export default Login;
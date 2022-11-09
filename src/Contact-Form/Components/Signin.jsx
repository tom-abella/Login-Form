import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

        //delay to proceed
        function proceed(){
            navigate("/")
        }

    try {
        
        await signUp(email, password);
        toast.success("Sign Up Compete!")
        setTimeout(proceed, 5000);
        

    } catch (err) {
        setError(err.message);
        toast.error("Sign Up Error!")
    }
    };
    return (
    <>
        <div className="card wrapper">
        <div className="card-body">
        <div className="p-4 box">
        <h2 className="mb-3">User Log In</h2>
        {error && <div className = "alert alert-danger" role="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3" controlid="formBasicEmail">
            <input
                className="form-control"
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div className="form-group mb-3"  controlId="formBasicPassword">
            <input
                className="form-control"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div className="d-grid gap-2">
            <button className="btn btn-primary" type="Submit" >
                Sign up
            </button>
        </div>
        </form>
    </div>
    <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
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

export default Signup;
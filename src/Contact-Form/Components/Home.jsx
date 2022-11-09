import React from "react";
import { Button } from "bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-4 box mt-3 text-center font">
      
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={handleLogout}>
          Log out
        </button>
      </div>
      <ToastContainer 
          position="top-center"
          autoClose={6000}
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

export default Home;
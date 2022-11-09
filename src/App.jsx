import { Routes, Route } from "react-router-dom";
import Home from "./Contact-Form/Components/Home";
import Login from "./Contact-Form/Components/Login";
import Signup from "./Contact-Form/Components/Signin";
import ForgotPass from "./Contact-Form/Components/ForgotPass";
import ProtectedRoute from "./Contact-Form/Components/ProtectedRoute";
import { UserAuthContextProvider } from "./Contact-Form/Context/UserAuthContext";

function App() {
  return (
    <div className="container ">
      <div className="row ">
       <div className="col-12 col-sm-10 col-md-6 col-lg-5 ">
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-pass" element={<ForgotPass />} />
            </Routes>
          </UserAuthContextProvider>
          </div>
        </div>
    </div>
  );
}

export default App;
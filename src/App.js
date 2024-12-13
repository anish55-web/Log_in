import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Author/authorisation";
import Login from "./Components/Loginpage";
import Home from "./Components/Homepage";
import Admin from "./Components/Mainpage";

import AddProduct from "./Components/New";
import EditProduct from  "./Components/Upate";

function App() {

  return (
    <>
      <AuthProvider>
        <Router>

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
          </Routes>
        </Router>
      </AuthProvider>




    </>
  )
}

export default App
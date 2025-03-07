import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Stock from "./pages/Stock";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
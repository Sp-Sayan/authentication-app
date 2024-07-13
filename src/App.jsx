import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./pages/Home";
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [accountname, setAccountName] = useState();
  const [bgvideo, setBgVideo] = useState(false);

  const login = () => {
    console.log("Login function called");
    setAuthenticated(true);
  };
  const logout = () => {
    // console.log("Logout function called");
    setAuthenticated(false);
    setBgVideo(false);
  };
  const AccName = (e) => {
    setAccountName(e);
  };
  const handleBgVideo = () => {
    setBgVideo(true);
  };

  return (
    <div
      className={`h-screen w-screen flex flex-col justify-center items-center  ${
        authenticated && bgvideo
          ? "bg-transparent"
          : "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      }`}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route
            path="/home"
            element={
              authenticated ? (
                <Home
                  bgvideo={handleBgVideo}
                  name={accountname}
                  isLogout={logout}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          ></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route
            path="/login"
            element={<Login AccName={AccName} isLogin={login} />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <p className="text-slate-300 mt-10">
        Made with <span>❤</span> by Sayan
      </p>
    </div>
  );
}

export default App;

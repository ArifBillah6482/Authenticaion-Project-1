import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomeRoute from "./routes/HomeRoute";
import LoginRoute from "./routes/LoginRoute";
import NotFoundRoute from "./routes/NotFoundRoute";
import ProfileRoute from "./routes/ProfileRoute";
import RegisterRoute from "./routes/RegisterRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="register" element={<RegisterRoute />} />
          <Route path="login" element={<LoginRoute />} />
          <Route path="profile" element={<ProfileRoute />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cliente from "./pages/Cliente";
import Mesero from "./pages/Mesero";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cliente />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mesero" element={<Mesero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

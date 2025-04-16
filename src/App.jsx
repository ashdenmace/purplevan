import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Welcome from "./screens/Welcome";
import MechanicalHistory from "./screens/MechanicalHistory";
import PhotoShowcase from "./screens/PhotoShowcase";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/history" element={<MechanicalHistory />} />
          <Route path="/photos" element={<PhotoShowcase/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

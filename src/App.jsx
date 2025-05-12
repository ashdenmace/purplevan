import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Welcome from "./screens/Welcome";
import MechanicalHistory from "./screens/MechanicalHistory";
import PhotoShowcase from "./screens/PhotoShowcase";
import Contact from "./screens/Contact";
import Albums from "./screens/Albums";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/history" element={<MechanicalHistory />} />
          <Route path="/photos" element={<PhotoShowcase />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

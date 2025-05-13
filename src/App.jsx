import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Welcome from "./screens/Welcome";
import MechanicalHistory from "./screens/MechanicalHistory";
import PhotoShowcase from "./components/PhotoShowcase";
import Contact from "./screens/Contact";
import Albums from "./screens/Albums";
import CurrentAlbum from "./screens/CurrentAlbum";
import CelebrationsAlbum from './screens/CelebrationsAlbum';
import BeforeAlbum from "./screens/BeforeAlbum";

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
          <Route path="/current" element={<CurrentAlbum />} />
          <Route path="/auto-work" element={<BeforeAlbum />} />
          <Route path="/celebrations" element={<CelebrationsAlbum />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

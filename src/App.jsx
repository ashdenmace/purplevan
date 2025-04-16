import { useState } from 'react'
import "./styles/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./screens/Welcome";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <NavBar />
      <Welcome />
    </>
  )
}

export default App

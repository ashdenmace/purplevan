import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./screens/Welcome";
import Banner from "./components/Banner";

function App() {

  return (
    <>
      <Banner />
      <Welcome />
    </>
  )
}

export default App

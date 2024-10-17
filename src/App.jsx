import React from "react";
import './App.css';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Login from "./Screens/Login/login";
import Perfil from "./Screens/Perfil/perfil";
import Registro from "./Screens/Regsitro/registro";

function App(){
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Perfil" element={<Perfil/>} />
      <Route path="/Registro" element={<Registro/>} />
      </Routes>
    </Router>
  );
}






export default App;

import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import  './login.css';

export default function Login(){
    const navigate= useNavigate();
    const [correo, setCorreo] = useState("")
    const [contraseña , setContraseña]= useState("")


    const InicioSesion = (e) =>{
        e.preventDefault();
        if(correo && contraseña){
            console.log("Inicio de sesión: ",{correo, contraseña});
            navigate('/Perfil');

        }else {
            alert("Por favor, llene todo los campos requeridos")
        }

    };

    

}








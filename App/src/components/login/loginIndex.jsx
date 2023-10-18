import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../js/login-func/login.js";
import "../../stylesheet/login.css";

//Retorna la pagina asociada al login del usuario comun
function commonLogin(){
    //Retorna el <div> asociado a la pantalla de features para el usuario comun
}

//Retorna la pagina asociada al login del usuario admin
function adminLogin(){
    //Retorna el <div> asociado a la pantalla de features para el usuario admin
}

//Manejo de estado y direccionamiento de paginas dado al
export function LoginPage(){
    //Establece los espacios relacionados los parametros que el usuario llenara al realizar login
    const [input, setForm] = useState({
        username: "test1@test.com",
        password: "123456",
        permisos: false,
    });
}
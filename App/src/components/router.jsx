import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, estaLogeado } from "./VentanasAcceso/login";
import { RegisterPage, estaRegistrado } from "./VentanasAcceso/register";
import { UserMainPage } from "./VentanasUsuarios/indexUser";
import { AdminMainPage } from "./VentanasAdministradores/indexAdmin";
import { UserOBJ } from "../js/access_functions/login.js";
import { EsAdmin } from "../js/access_functions/user_checks.js";

/*
//Define un Controlador del Estado del Usuario, el cual contiene:
- obj: Objeto asociado al usuario
- logged: Indica si el usario ya accedio a la app
- ventana: Indica en que ventana esta el usuario
*/
const User = {
  obj: null,
  register: false,
  logged: false,
};

//Si se registra exitosamente marcara como loggeado
function LoginExitoso(){
  if(estaLogeado){
    User.obj=UserOBJ;
    User.logged= true;
    User.register= true;
    return true;
  }
  return false;
}

//Si se logea exitosamente marcara como registrado
function RegistroExitoso(){
  if(estaRegistrado){
    User.obj=UserOBJ;
    User.logged= true;
    User.register= true;
    return true;
  }
  return false;
}

/*
//Ruteador de la de la aplicacion, las cuales en orden son:
1. Un usuario en path="/" tendra que:
  - Si esta logeado:
    - y no es admin => va hacia la ventana principal de usuario
    - y es admin => va hacia la ventana principal de admin
  - No esta logeado:
    - Navega hacia el path "/login"
2. Usuario en path="/login" tendra que:
  - Si esta logeado:
    - y no es admin => Navega hacia el path "/app/user"
    - y es admin => Navega hacia el path "/app/admin"
  - No esta logeado:
    - Va hacia la ventana de login
3. Usuario en el path "/register":
  - Si esta registrado:
    - y no es admin => Navega hacia el path "/app/user" y se logea
    - y es admin => Navega hacia el path "/app/admin" y se logea
  - No esta registrado => Va hacia la ventana de registrado
4. Usuario en el path "/app/user":
  - Si esta logeado:
    - y no es admin => Va hacia ventana principal del usuario
    - y es admin => Navega hacia el path "/login"
  - No esta logeado:
    - Navega hacia el path "/login"
5. Usuario en el path "/app/admin":
  - Si esta logeado:
    - y no es admin => Navega hacia el path "/login"
    - y es admin => Va hacia ventana principal del admin
  - No esta logeado:
    - Navega hacia el path "/login"
*/
export const RuteadorLogin= () => {
  return(
    <Routes>
      <Route
        path="/"
        element={
          LoginExitoso() ? (
            EsAdmin(User.obj) ? (<AdminMainPage></AdminMainPage>):(<UserMainPage></UserMainPage>)
          ):(<Navigate to="/login"></Navigate>)
        }
      />
      <Route
        path="/login"
        element={
          LoginExitoso() ? (
            EsAdmin(User.obj) ? (<Navigate to="/app/admin"></Navigate>):(<Navigate to="/app/user"></Navigate>)
          ):(<LoginPage></LoginPage>)
        }
      />
      <Route
        path="/register"
        element={
          RegistroExitoso() ? (
            EsAdmin(User.obj) ? (<Navigate to="/app/admin"></Navigate>):(<Navigate to="/app/user"></Navigate>)
          ):(<RegisterPage></RegisterPage>)
        }
      />
      <Route
        path="/app/user"
        element={
          User.logged ? (
            EsAdmin(User.obj) ? (<Navigate to="/app/admin"></Navigate>):(<UserMainPage></UserMainPage>)
          ):(<LoginPage></LoginPage>)
        }
      />
      <Route
        path="/app/admin"
        element={
          User.logged ? (
            EsAdmin(User.obj) ? (<AdminMainPage></AdminMainPage>):(<Navigate to="/app/admin"></Navigate>)
          ):(<LoginPage></LoginPage>)
        }
      />
    </Routes>
  );
};
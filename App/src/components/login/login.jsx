import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser, UserOBJ } from "../../js/user_functions/login.js";
import "../../js/user_functions/user_bd.js";
import "../../stylesheet/login.css";

//Flag que indica exito del login
export let estaLogeado= false;

//Constante asociada a la ventada de login y su estructura (Y recibe estructura de funciones usadas)
const LogWindow= (estado,onChange,onSubmit,todoOk,toggleCheck) => {
    return(
        <div className="login-container">
            <div className="login-box">
            <div className="login-box__title">Login</div>
                <form action="" onSubmit={onSubmit}>
                    <div className="username-box">
                    <input
                        type="username"
                        name="username"
                        placeholder="username"
                        value={estado.username}
                        onChange={onChange}
                    />
                    <span></span>
                    </div>

                    <div className="password-box">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={estado.password}
                        onChange={onChange}
                    />
                    <span></span>
                    </div>

                    <div className="rememberMe-newAccount-container">
                    <div className="check-box" onClick={toggleCheck}>
                        <input
                        type="checkbox"
                        name="rememberme"
                        checked={estado.rememberme}
                        readOnly
                        />
                        <label>Recordarme</label>
                    </div>

                    <div>
                        <Link to="/register">Crear cuenta</Link>
                    </div>
                    </div>

                    <div>
                    <button
                        className={todoOk() ? "login-button" : "disable-button"}
                        type="submit"
                        disabled={!todoOk()}
                    >
                        INGRESAR
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

//Manejo de estado, estructura y formato del login
export function LoginPage(){
    //Hook entre los inputs del login que usaremos para manejar el estado del login y sus parametros
    const [estado, setEstado] = useState({
        username: "username",
        password: "1234",
        permisos: 0,
        rememberme: false,
    });
    //Actualiza asincronicamente el contenido ingresado y los guarda de manera local en setState mientras sucede otro evento
    useEffect(()=> {
        const username= localStorage.getItem("username");
        if (username) {
            setEstado((estado)=> ({
                ...estado,
                username,
                rememberme: true,
            }));
        }
        // console.log("Updated State");
    }, []);
    //Captura los cambios realizados en los inputs dentro de la ventana de login
    const onChange = ({ target }) => {
        const { name, value } = target;
        // console.log(name, value);
        setEstado({
            ...estado,
            [name]: value,
            });
    };
    //Evalua el contenido de los inputs en login al enviar esta informacion
    const onSubmit = async (ev) => {
        ev.preventDefault();
        estado.rememberme
        ? localStorage.setItem("username", estado.username)
        : localStorage.removeItem("username");
        let userLooked= UserToObjWithSchema(estado.username,estado.password,estado.permisos);
        const ok = await loginUser(userLooked.username,userLooked.password);
        if (!ok) {
            console.log("Error: Verifique Usuario y/o Contraseña que sean validaz");
            userLooked=null;
        }else{
            console.log("Logging fue exitoso");
            UserOBJ=userLooked;
            estaLogeado=true;
        }
    };
    //Checkea que los field no esten vacios
    const todoOk = () => {
        return estado.username.length > 0 && estado.password.length > 0 ? true : false;
    };
    //Cambia si se recuerda la info del usuario o no dependiendo del check que lo define
    const toggleCheck = () => {
        setEstado({
            ...estado,
            rememberme: !estado.rememberme,
        });
    };
    return LogWindow(estado,onChange,onSubmit,todoOk,toggleCheck);
}
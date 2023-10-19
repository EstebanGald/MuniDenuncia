import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { registerUser, UserOBJ } from "../../js/user_functions/login.js";
import "../../js/user_functions/user_bd.js";
import "../../stylesheet/register.css";

//Flag que indica exito del registrado
export let estaRegistrado= false;

//Constante asociada a la ventada de registrado y su estructura (Y recibe estructura de funciones usadas)
const regWindow= (estado,onChange,onSubmit,todoOk) => {
    return(
        <div className="registry-container">
            <div className="registry-box">
            <div className="registry-box__title">Registro</div>
                <form action="" onSubmit={onSubmit}>
                    <div className="name-box">
                    <input
                        type="name"
                        name="name"
                        placeholder="Name"
                        value={estado.name}
                        onChange={onChange}
                    />
                    <span></span>
                    </div>

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

                    <div className="back-to-login">
                    <div>
                        <Link to="/login">Ya tienes cuenta?</Link>
                    </div>
                    </div>

                    <div>
                    <button
                        className={todoOk() ? "login-button" : "disable-button"}
                        type="submit"
                        disabled={!todoOk()}
                    >
                        CREAR CUENTA
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

//Manejo de estado, estructura y formato del login
export function RegisterPage(){
    //Hook entre los inputs del login que usaremos para manejar el estado del login y sus parametros
    const [estado, setEstado] = useState({
        name: "name",
        username: "username",
        password: "1234",
        permisos: 0,
    });
    //Actualiza asincronicamente el contenido ingresado y los guarda de manera local en setState mientras sucede otro evento
    useEffect(()=> {
        const username= localStorage.getItem("username");
        if (username) {
            setEstado((estado)=> ({
                ...estado,
                username,
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
        let userLooked= UserToObjWithSchema(estado.username,estado.password,estado.permisos);
        const ok= registerUser(userLooked.username,userLooked.password,userLooked.permisos);
        if (!ok) {
            console.log("Error: Verifique Usuario y/o Contraseña que sean validaz");
            userLooked=null;
        }else{
            console.log("%s logro registrarse como %s y su perfil es de tipo %d",estado.name,username,permisos);
            UserOBJ=userLooked;
            estaRegistrado=true;
        }
    };
    //Checkea que los field no esten vacios
    const todoOk = () => {
        return estado.name.length > 0 && estado.username.length > 0 && estado.password.length > 0 ? true : false;
    };
    return regWindow(estado,onChange,onSubmit,todoOk);
}
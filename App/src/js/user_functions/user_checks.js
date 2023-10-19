import { usuarios } from "./user_bd";

//Busca a un usuario dado su username y password
export function BuscarUserOBJ(username,psw){
    usuarios.forEach((element, index) => {
        if(element["username"]==username && element["password"]==psw){
            console.log("Se encontro en %d al usuario con username %s y psw indicado",index,username);
            return element;
        }
        });
    console.log("Usuario no existe con parametros indicados");
    return null;
}

//Obtiene el nombre de un objeto usuario
export function NombreDelUserOBJ(userOBJ){
    console.log("Retornando el nombre del objeto usuario");
    return userOBJ["username"];
}

//Obtiene el nombre de un objeto usuario
export function PasswordDelUserOBJ(userOBJ){
    console.log("Retornando la contraseña del objeto usuario");
    return userOBJ["password"];
}

//Obtiene el nombre de un objeto usuario
export function TipoDelUserOBJ(userOBJ){
    console.log("Retornando el tipo de permiso del objeto usuario");
    return userOBJ["permisos"];
}

//Indica si el usuario es admininstrador o no
export function EsAdmin(userOBJ){
    if(userOBJ.permisos== 0){
        return false;
    }
    return true;
}
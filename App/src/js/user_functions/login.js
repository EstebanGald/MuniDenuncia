//Importa contenido relacionado al manejo y "almacenamiento" de usuarios
import "./user_bd.js"
import "./user_checks.js"

//Define un objeto usuario inicial
export let UserOBJ= {
    username: null,
    password: null,
    permisos: -1,
};

//Comprueba sobre la validez del login e indicando en el retorno exito del proceso para guiar a la pagina
export function loginUser(username,psw){
    //Busca si existe un objeto usuario con los parametros indicados
    UserOBJ= BuscarUserOBJ(username,psw);
    if(UserOBJ==null){
        //El usuario indicado no existe en la app
        console.log("Error: Usuario no existe o mal ingresado");
        return false;
    }else if(UserOBJ.permisos< 0){
        //Usuario tiene mal definido sus permisos
        console.log("Error: Usuario tiene permiso desconocido");
        return false;
    }
    let permiso_label= "None";
    if(UserOBJ.permisos== 0){
        permiso_label= "Comun";
    }else{
        permiso_label= "Admin";
    }
    console.log("Usuario %s tiene permiso tipo %s",username,permiso_label);
    return true;
}

//Comprueba la validez del registrado e indicando en el retorno exito del proceso para guiar a la pagina
export function registerUser(username,psw,permisos){
    //Genera el objeto que define al usuario (siempre es usuario comun)
    UserOBJ=UserToObjWithSchema(username,psw,permisos);
    console.log("Obj del usuario que intenta registrarse es:\n",regUser);
    //Comprueba que el usuario sea valido (Registrado en la lista)
    if (!CheckUserInList(UserOBJ)) {
        //Agrega al usuario a la lista que los almacena, ya que no existia
        console.log("Usuario %s valido para registrarse a la app",username);
        AddNewUser(UserOBJ);
        return true;
    }else{
        //Usuario ya existe previamente
        console.log("Usuario %s ya existe en la plataforma",username);
        return false;
    }
}
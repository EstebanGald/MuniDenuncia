//Importa contenido relacionado al manejo y "almacenamiento" de usuarios
import "../listUsers/usuarios.js"

//Define una variable que correspondera al usuario actualmente logeado
export let logginUserOBJ;

//Comprueba sobre la validez del login e indicando en el retorno el tipo de login para guiar pagina
export function loginUser(username,psw,esAdmin){
    //Genera el objeto que define al usuario
    logginUserOBJ=UserToObjWithSchema(username,psw,esAdmin);
    console.log("Obj del usuario que intenta logearse es:\n",logginUserOBJ);
    //Comprueba que el usuario sea valido (Registrado en la lista)
    if (CheckUserInList(logginUserOBJ)) {
        console.log("Usuario %s valido para login a la app",username);
        //Comprueba permiso del usuario para determinar tipo de login
        var permisoUsuario= TipoDelUserOBJ(logginUserOBJ);
        if(permisoUsuario==0){
            //Es un usuario comun
            console.log("Usuario %s tiene permiso tipo %s",username,"Comun");
            return 0;
        }else if(permisoUsuario==1){
            //Es un usuario admin
            console.log("Usuario %s tiene permiso tipo %s",username,"Admin");
            return 1;
        }else {
            //Usuario de tipo desconocido, por lo que no logea
            console.log("Usuario %s tiene permiso tipo %s, asi que lo realiza login",username,"Unknown");
            return -1;
        }
    }else{
        console.log("Usuario %s no existe en la plataforma",username);
        return -2;
    }
}

//Comprueba la validez del registrado e indicando en el retorno exito del proceso para guiar a la pagina
export function registerUser(username,psw){
    //Genera el objeto que define al usuario (siempre es usuario comun)
    var regUser=UserToObjWithSchema(username,psw,0);
    console.log("Obj del usuario que intenta registrarse es:\n",regUser);
    //Comprueba que el usuario sea valido (Registrado en la lista)
    if (!CheckUserInList(regUser)) {
        //Agrega al usuario a la lista que los almacena
        console.log("Usuario %s valido para registrarse a la app",username);
        return true;
    }else{
        console.log("Usuario %s ya existe en la plataforma",username);
        return false;
    }
}
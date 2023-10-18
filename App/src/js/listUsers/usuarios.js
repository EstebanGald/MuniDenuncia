//Datos Iniciales que se conocen (tipo BD estatica)
export const user_schema= require('../listUsers/user_schema.json');
export const user_bd= require('../listUsers/user_list.json');

//Listado de usuarios utilizado de manera local que seran utilizados ("BD" local)
export let usuarios= JSON.parse(jsonArray);

//Genera un objeto persona dado ciertos parametros y el schema definido
export function UserToObjWithSchema(user,psw,esAdmin) {
    const obj= {};
    console.log("Creating user with parameters [%s,%s,%s]",user,psw,esAdmin);
    if(user_schema.properties) {
        Object.keys(schema.properties).forEach(property => {
            if (property=="username") {
                object["username"] = user;
            } else if(property=="password"){
                object["password"] = psw;
            } else if(property=="permisos"){
                object["permisos"] = esAdmin;
            }
        });
    }
    console.log("User object looks like:",obj);
    return obj;
}

//Ve si un usuario existe en la lista y retorna un booleano que indica esto
export function CheckUserInList(userObj) {
    usuarios.forEach((element, index) => {
        if (JSON.stringify(element) === JSON.stringify(userObj)) {
            console.log("Object exist at index %d",index);
            return true;
        }
        });
    console.log("User is not save in list");
    return false;
}

//Agrega un usuario nuevo a la lista de usuarios
export function AddNewUser(userObj) {
    console.log("Usuario que se desea agregar:",userObj);
    console.log("Observar contenido de la lista de usuarios =>");
    PrintingUsers();
    if(!checkUserInList(userObj)){
        console.log("Persona no existe, por lo que se agrega");
        usuarios.push(userObj);
    }else{
        console.log("Persona ya existe, por lo que no se agrega");
    }
    console.log("Observa resultado del proceso sobre la lista de usuarios =>");
    PrintingUsers();
}

//Obtiene un userOBJ en el indice indicado si existe
export function ObtainUserByIndex(indice){
    var largo= usuarios.lenght();
    if(largo <= indice){
        console.log("Indice excede la cantidad actual de usuarios");
        return null
    }
    console.log("Retornando persona en la posicion %d de la lista",indice);
    return usuarios[indice];
}

//Imprime la cantidad de usuarios y sus caracteristicas en consola
export function PrintingUsers() {
    var largo= usuarios.lenght();
    console.log("Hay %d usuarios, los cuales son:",largo);
    usuarios.forEach((element,index)=> {
        var i= "{0}:".format(index);
        console.log(i,element);
    })
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
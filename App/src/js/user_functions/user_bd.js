//Datos Iniciales que se conocen (tipo BD estatica)
export const user_schema= require('./user_schema.json');
export const user_bd= require('./user_list.json');

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

//Ve si un objeto usuario existe en la lista y retorna un booleano que indica esto
export function CheckUserInList(userObj) {
    usuarios.forEach((element, index) => {
        const fields_saved= Object.keys(element);
        const fields_new= Object.keys(userObj);
        if(fields_saved.length!= fields_new.length){
            console.log("UserOBJ posee una cantidad diferente de campos a los usados en la lista");
            return false;
        }
        for(let k of fields_saved) {
            let hasDiference= false;
            if(element[k] != userObj[k]){
                hasDiference= true;
            }
            if(hasDiference){
                console.log("Object exist at index %d",index);
                return true;
            }
        }
    });
    console.log("User is not save in list");
    return false;
}

//Obtiene un userOBJ en el indice indicado si existe
export function ObtainUserByIndex(indice){
    let largo= usuarios.lenght();
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
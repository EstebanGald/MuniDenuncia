# MuniDenuncia
App para realizar denuncias en tu municipalidad
## Integrantes
- Sebastian Meneses: 201973568-3
- Fransisco Muñoz: 201973581-0
- Esteban Carrasco: 201773646-5
# Importante
## Estructura de carpetas
- src: Contiene la aplicacion
    - assets: Contiene los elementos multimedia utilizados en la app
    - components: Contiene las ventanas de la aplicacion
        - login: Relacionado al login de usuario o administracion
        - user: Contiene las ventanas especificas de los usuarios
            - mapaDenuncias: Mapa con ubicacion en mapa de distintas denuncias
            - listadoDenuncias: Listado de las distintas denuncias
            - generadorDenuncias: Ventana con la que se podra enviar una nueva denuncia
            - configPerfil: Ventana donde se puede ver el perfil del usuario, ciertas estadisticas de el y modificar ciertos datos
        - admin: Contiene las ventanas especificas de los administradores
            - listadoDenunciasSuper: Ventana con listado de denuncias y informacion extra relevante para los administradores
            - verDenuncia: Permite ver, modificar o eliminar parametros y aspectos de una denuncia
            - verUsuarios: Permite ver e interactuar con ciertos aspectos de los usuarios de la app
            - listaDeTrabajo: Listado que contiene parametros y estados sobre los trabajos realizados sobre ciertas denuncias
    - stylesheet: Contiene los archivos css relacionados al estilo y aspecto visual de la pagina
    - js: Contiene los archivos javascript utilizados en la app
# Links Utiles
## Tutoriales
- [Crear una bd sin servidor](https://www.freecodecamp.org/news/how-to-add-a-serverless-database-to-react-projects-and-web-apps/)
- [React autocomplete](https://mui.com/material-ui/react-autocomplete/)
- [Integracion google maps y react](https://medium.com/scalereal/integration-of-google-maps-with-react-part-1-86c075ab452a)
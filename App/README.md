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
        - icon: Contiene los iconos utilizados por la app
        - img: Contiene las imagenes utilizadas por la app
    - components: Contiene las componentes/ventanas de la app
        - router: Encargado del ruteo de las ventanas de la app
        - VentanasAccesp: Contiene las Ventanas de acceso de la app
        - VentanasUsuarios: Contiene las Ventanas de los Usuarios Comunes de la app
        - VentanasAdministradores: Contiene las Ventanas de los Usuarios Administradores de la app
    - js: Contiene los javascript y json utilizados en la app
        - access_functions: Contiene elementos relacionados al login, registrado, serverless-BD y verificacion de la app
        - map_functions: Contiene elementos relacionados al serverless-BD y funcionalidades sobre el mapa de la app
        - webpack.config: Contiene la configuracion del setUp de la pargina (Se define asi para permitir modificaciones manuales)
    - stylesheet: Contiene los elementos que definen el estilos de los componentes de la app
## Paquetes Utilizados
- Considera que se pueden ver los paquetes utilizados mediante ***"npm install --dry-run"*** o ***"npm ls --depth=0"***
- Paquetes necesarios pueden ser actualizados con ***"npm install \<package-name\>@\<desired-version\> --save"*** o ***"npm install"***
- Comparte los mismos paquetes que la plantilla entregada
- Ademas de lo anterior, la app tiene los paquetes adicionales distintos a la plantilla:
    - sweetalert2
- Los paquetes utilizados para el desarrollo de la app son:
    - @babel/
        - eslint-parser@^7.17.0
        - eslint-plugin@^7.16.5
        - preset-env@^7.17.12
        - preset-react@^7.14.5
    - @emotion/
        - react@^11.10.5
        - styled@^11.10.5
    - @mui/material@^5.10.12
    - babel-
        - eslint@^10.1.0
        - loader@^8.2.2
    - css-loader@^6.2.0
    - eslint-
        - config-standard-react@^7.0.2
        - config-standard@^12.0.0
        - plugin-import@^2.16.0
        - plugin-node@^8.0.1
        - plugin-promise@^4.1.1
        - plugin-react@^7.12.4
        - plugin-standard@^4.0.0
    - eslint@^8.10.0
    - file-loader@^6.2.0
    - html-webpack-plugin@^5.3.2
    - mini-css-extract-plugin@^2.3.0
    - react-dom@^17.0.2
    - react-redux@^7.2.5
    - react-router-dom@^6.4.0
    - react@^17.0.2
    - sass-loader@^12.1.0
    - style-loader@^3.2.1
    - webpack-cli@^4.8.0
    - webpack-dev-server@^4.2.0
    - webpack@^5.52.0
# Links y Contenidos Utiles
- [Crear una bd sin servidor](https://www.freecodecamp.org/news/how-to-add-a-serverless-database-to-react-projects-and-web-apps/)
- [React autocomplete](https://mui.com/material-ui/react-autocomplete/)
- [Integracion google maps y react](https://medium.com/scalereal/integration-of-google-maps-with-react-part-1-86c075ab452a)
- [Geoapify Tutorial](https://www.geoapify.com/create-custom-map-marker-icon)
- [API Generacion de Marcadores de Mapas](https://apidocs.geoapify.com/playground/icon/)
- [Tutorial Iconos GeoApifu](https://apidocs.geoapify.com/samples/markers/leaflet-custom-marker/)
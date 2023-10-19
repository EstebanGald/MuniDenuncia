//Importa libreria con utilidads sobre manejo de archivos y directorios
const path = require('path');

//Define la configuracion que tendra el webpack server
module.exports = {
    //Define el modo
    mode: 'development',
    //Define donde la app ira constuyendo sus proceso de empaquetado (no son dinamicos)
    entry: './main.jsx',
    //Define como webpack guardara las salidas de los empaquetados, assets y elements relacionados a estos
    //  - path: Define el directorio del output como un path absoluto
    //  - filename: Define el nombre y directorio en el que se guardara el empaquetado de salida
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    //modulo: Define Como distintos modulos se comportaran dentro de la app
    //- rule: Define una serie de reglas que guiaran a los modulos definidos
    //  -   test: Define la forma (Generalmente como Regex) que deben tener los archivos que se les aplica esta regla
    //  -   exclude: Ecluye modulos que cumplan las condiciones indicadas del empaquetado
    //  -   use: carga un loader especifico que usara sobre los archivos que cumplen test
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    //Configuraciones que Alteran el comportamiento del servidor webpack-dev
    //- contentBase: Define el directorio estatico que tendra el contenido
    //- compress: Habilita el uso de gzip compression en el servidor
    //- port: Define el puerto que sera utilizado para desplegar
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 5050,
    },
};

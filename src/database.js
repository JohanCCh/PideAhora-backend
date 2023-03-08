import { Client } from 'pg';
import { URL_DB } from './config';

//conexión a la base de datos
export const client = new Client({
    host: URL_DB,
    user: 'postgres', //usuario de pgAdmin
    password: 'Admin', //contraseña
    database: 'pideAhora',
    port: '5432'
});

//prueba de conexión
client.connect()
    .then(db => {
        console.log('DB is connected');
    })
    .catch(err => {
        console.log(err);
    });

//cerrar conexión
export const closeDB = () => {
    client.end();
};

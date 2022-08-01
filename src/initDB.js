import ProductosModel from "./models/productos.js";
import MensajesModel from "./models/mensajes.js";
import { optionsSQLite3 } from "./options/SQLite3.js";
import { optionsMariaDB } from "./options/mariaDB.js";

const sqlMariaDB = new ProductosModel(optionsMariaDB);
const sqlSQLite3 = new MensajesModel(optionsSQLite3);

// Crear tabla productos
sqlMariaDB.createProductsTable()
.then(() => {
    console.log('Tabla productos creada con exito');        
})
.catch((err) => {
    console.log(err);
    throw err;
})
.finally(() => {
    sqlMariaDB.close();
});

// Crear tabla mensajes
sqlSQLite3.createMessagesTable()
.then(() => {
    console.log('Tabla mensajes creada con exito');        
})
.catch((err) => {
    console.log(err);
    throw err;
})
.finally(() => {
    sqlSQLite3.close();
});
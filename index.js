const fs = require('fs');
const Header = require('./helpers/header')

const base = 5;
let salida = ``;

Header(base)
for(let i = 0; i <= 10; i++){

    salida += `${base} X ${i} = ${base*i} \n`
}

fs.writeFile(`Tabla-${base}`, salida, (err)=>{
    if(err) throw err;
    console.log(`Tabla-${base} Creada`)
});
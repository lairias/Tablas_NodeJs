
const fs = require("fs");
const multiplicador = (base)=>{
    let salida = ``;
for (let i = 0; i <= 10; i++) {
  salida += `${base} X ${i} = ${base * i} \n`;
}

fs.writeFileSync(`Tabla-${base}`, salida);
};

module.exports =multiplicador;
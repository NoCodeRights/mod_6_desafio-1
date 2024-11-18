const fs = require("fs");
const fileName = "citas.json";

const checkFile = () => {
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, "[]");
  }
};

const registrar = (argumento) => {
  checkFile();

  const data = fs.readFileSync(fileName, "utf-8");
  const nuevoObjeto = JSON.parse(data);

  const animal = [
    {
      nombre: argumento[1],
      edad: argumento[2],
      tipo: argumento[3],
      color: argumento[4],
      enfermedad: argumento[5],
    },
  ];
  console.log(animal);
  nuevoObjeto.push(...animal);

  fs.writeFileSync(fileName, JSON.stringify(nuevoObjeto), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Archivo creado");
    }
  });
};

const leer = () => {
  checkFile();
  const fileJson = fs.readFileSync(fileName, "utf-8");
  JSON.parse(fileJson).forEach((element) => {
    console.log(element);
  });
};

module.exports = { registrar, leer };
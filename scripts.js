let nota;
let suma = 0;
let aux = 0;

function Persona(nombreParam, apellidoParam, materiaParam) {
    this.nombre = nombreParam;
    this.apellido = apellidoParam;
    this.materia = materiaParam;
    this.resultado = () => console.log(`Alumno ${this.nombre} ${this.apellido} de la materia ${this.materia}`)
}

let nombre = prompt("Ingrese el nombre del alumno");
let apellido = prompt("Ingrese el apellido del alumno");
let materia = prompt("Ingrese la materia");


const persona1 = new Persona(nombre, apellido, materia);

cantidad = parseInt(prompt("Ingrese la cantidad de notas que desea promediar"));

while (aux < cantidad) {

    nota = parseFloat(prompt("Ingrese nota"));

    if (isNaN(nota)) {
        alert("Ingrese una nota valida")
    } else {
        suma = suma + nota;
        aux++;
    }
}

function promedio(nota) {
    console.log(suma / cantidad)
}

persona1.resultado()
console.log("El promedio es");
promedio(nota)
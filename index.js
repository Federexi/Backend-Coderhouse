class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName = () => {
        console.log(`El nombre completo del usuario es: ${this.nombre} ${this.apellido}`)
    }

    addMascota =  (mascota) => {
        this.mascotas.push(mascota)
    }

    countMascotas = () => {
        return this.mascotas.length
    }

    addBook = (nombre, autor) => {
        this.libros.push({nombre, autor})
    }

    getBookNames = () => {
        return this.libros.map(libro => libro.nombre)
    }
}

const usuario1 = new Usuario("Pedro", "Lax")
const usuario2 = new Usuario("Fede", "Prom")

usuario1.addMascota("Perro")
usuario1.addMascota("Pájaro")
usuario2.addMascota("Gato")
usuario1.addBook("El principito", "Jean Clux")
usuario1.addBook("El gran danés", "Montpellier")

console.log(usuario1.getFullName())
console.log(usuario1.mascotas)
console.log(usuario1.countMascotas())
console.log(usuario1.libros)
console.log(usuario1.getBookNames())
// ------------ Objetos --------------
const film = {
    title: "Batman",
    year: 1989,
    duration: "2h 6min",
    score: 7.5,
    production: {
        director: "Tim Burton",
        script: ["Sam Hamm", "Warren Skaaren"],
        mainCast: ["Michael Keaton", "Jack Nicholson", "Kim Basinger"]
    },
    mainActor() {
        return `El actor principal es ${this.production.mainCast[0]}`;
    }
};


//destructuración
const {tittle, year, duration, score, production} = film;
console.log(`Titulo: ${tittle}
Año: ${year}
Duración: ${duration}
Puntuación: ${score}
Reparto Principal: ${production.mainCast}
`);

// Congelar el objeto
Object.freeze(film);
console.log(Object.isFrozen(film));

// Seal (sellar) en el objeto
Object.seal(film);
console.log(Object.isSealed(film));

// Rest en el objeto
const {tittle:titulo,year:año, ...detalles} = film;
console.log(detalles);

//Spread en el objeto
const film2 = {
    ...film, //trae toda la informacion que hay en el objeto y lo expande con nueva informacion
    tittle: "Batman Inicia",
    year: 2005
}
console.log(film2);

//Acceder al contenido del objeto
console.log(film.mainActor());

console.log("Obtener las claves:",Object.keys(film))
console.log("Obtener los valores:",Object.values(film))
console.log("Obtener las claves y valores en un array:",Object.entries(film))

//Abreviación de propiedades
const nombre = "Batman: el caballero de la noche";
const añoEstreno = 2008;

const movie = {
    nombre,
    añoEstreno
}
console.log(movie);

// ------------ Arreglos --------------

const peliculas = [
    {
    nombre: "Liga de la justicia", 
    añoEstreno: 2017, 
    duracion: "2h"
    },
    {
    nombre: "Batman v Superman: Dawn of Justice", 
    añoEstreno: 2016, 
    duracion: "2h 31in"
    },
    {
    nombre: "Batman y Robin", 
    añoEstreno: 1997, 
    duracion: "2h 5min"
    }
]

//Uso de propiedades en los arreglos

const peliculass = peliculas.map(p => {
    return {
        nombre: p.nombre.toLocaleLowerCase(),
    }
})

console.log(peliculass);

console.log("Número de elementos:", peliculas.length);
peliculas.length >= 2 ? console.log("Ver peliculas") : console.log("Solo hay una pelicula");


// Forma de iterar un arreglo
//1 
console.log("\n Primera");

for(let i=0; i<peliculas.length; i++){
    console.log(`${i} - ${peliculas[i].nombre}`);
}

//2
console.log("\n Segunda");
peliculas.forEach((p, i) => {
    console.log(`${i} - ${p.nombre}`);
})

//3
console.log("\n Tercera");
const nuevaPelicula = peliculas.map((p, i) => {
    return `${i} - ${p.nombre}`;
})
console.log(nuevaPelicula);
console.log();


const peliculasDC = ["Flash", "Batman", "Mujer Maravilla"];

peliculasDC.push("Superman")                //.push: agregar elemento al final
peliculasDC.unshift("Linterna Verde")     //.unshft: agregar elemento al inicio
console.log(peliculasDC)

peliculasDC.pop()                   //.pop: elimina el último elemento
peliculasDC.shift()                 //shift: elimina el primer elemento 
console.log(peliculasDC)

//encontrar elementos
const peliculaa = peliculasDC.find(p => p === "Flash");
console.log(peliculaa);

//filtrar elementos
const resultPeliculaFiltro = peliculasDC.filter(p => p.startsWith("M"));
console.log(resultPeliculaFiltro);
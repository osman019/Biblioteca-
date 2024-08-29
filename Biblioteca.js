const libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        paginas: 432,
        prestado: false,
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        paginas: 328,
        prestado: false,
    },
    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        paginas: 863,
        prestado: true,
    },
];

function mostrarLibros(libros) {
    libros.forEach(libro => {
        console.log(`{libro.titulo} por {libro.autor}`);
    });
}

function listarLibrosDisponibles(libros) {
    return libros.filter(libro => !libro.prestado);
}
function buscarLibros(libros, criterio) {
    return libros.filter(libro =>
        libro.titulo.toLowerCase().includes(criterio.toLowerCase()) ||
        libro.autor.toLowerCase().includes(criterio.toLowerCase())
    );
}

1const libros = [
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

// funcion para buscar libras.
function mostrarLibros(libros) {
    libros.forEach(libro => {
        console.log(`${libro.titulo} por ${libro.autor} (${libro.paginas} páginas) - Prestado: ${libro.prestado ? 'Sí' : 'No'}`);
    });
}

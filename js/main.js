const juguetes = [
    {
        id: 1,
        nombre: 'Camion',
        precio: 4000,
        publico: 'varon'
    },
    {
        id: 2,
        precio: 8000,
        nombre: 'Muñeca',
        publico: 'mujer'
    },
    {
        id: 3,
        precio: 2000,
        nombre: 'Otra Muñeca',
        publico: 'mujer'
    },
    {
        id: 4,
        precio: 1000,
        nombre: 'Muñeco',
        publico: 'varon'
    },
    {
        id: 5,
        precio: 18000,
        nombre: 'Auto',
        publico: 'varon'
    },
];

function mostrarTodos(){
    let texto = "Todos los juguetes: \n\n"
        juguetes.forEach(
            (j) => {
                texto = texto + `Nombre: ${j.nombre} | Precio: ${j.precio} | Para: ${j.publico}\n`
            }
        );
        alert(texto)
}

function buscarJuguete(nombre) {
    // puede ser un juguete o undefined
    const juguete = juguetes.find(
        (j) => {
            return j.nombre === nombre;
        }
    )

    if (typeof juguete === 'undefined') {
        alert('No se encontro el juguete ' + nombre)
    } else {
        alert(`
        Se encontro el juguete ${nombre}. Precio: $${juguete.precio}
        `)
    }

}


function buscarPorPrecioMenorQue(valor) {

    let juguetesFiltrados = juguetes.filter(
        (j) => j.precio < valor
    );

    if (juguetesFiltrados.length === 0) {
        alert('No hay juguetes con precio menor a ' + valor)
    } else {
        let texto = 'Los juguetes encontrados son: \n\n';
        juguetesFiltrados.forEach(
            (j) => {
                texto = texto + `Nombre: ${j.nombre} | Precio: ${j.precio} | Para: ${j.publico}\n`
            }
        );
        alert(texto);
    }

}

function buscarJuguetesPorSexo(sexo) {
    let juguetesFiltradosPorGenero = juguetes.filter(
        (j) => j.publico === sexo
    );

    if (juguetesFiltradosPorGenero.length === 0) {
        alert("No se encontraron juguetes para el valor ingresado")
    }else {
        let encontrados = "los juguetes encontrados para " + sexo + " son: \n\n"
        juguetesFiltradosPorGenero.forEach(
            (j) => {
                encontrados = encontrados + `Nombre: ${j.nombre} | Precio: ${j.precio} | Para: ${j.publico}\n`
            }
        );
        alert(encontrados)
    }
}
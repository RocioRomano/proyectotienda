const botonMostrarTodos = document.getElementById("mostrar-todos");
const botonBuscarPorNombre = document.getElementById('buscar-por-nombre');
const botonBuscarPorPrecio = document.getElementById("buscar-por-precio");
const botonBuscarPorGenero = document.getElementById("buscar-por-sexo");

const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById('precio');

botonMostrarTodos.onclick = ()=>{
    mostrarTodos();
};

botonBuscarPorNombre.onclick = ()=>{
    buscarJuguete(inputNombre.value);
}

inputNombre.onkeyup = (e)=>{
    if(e.key === 'Enter'){
        buscarJuguete(inputNombre.value);
    }
}

botonBuscarPorPrecio.onclick = ()=>{
    buscarPorPrecioMenorQue(inputPrecio.value);
}
inputPrecio.onkeyup = (e)=>{
    if(e.key === "Enter"){
        buscarPorPrecioMenorQue(inputPrecio.value);
    }
}

 botonBuscarPorGenero.onclick = ()=>{
    buscarJuguetesPorSexo();
 }
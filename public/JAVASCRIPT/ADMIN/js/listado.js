




const URL = 'http://localhost:3000/productos/';

let tbody = this.document.querySelector('tbody');
let form = this.document.querySelector('form')
let table = document.querySelector('table');
let inputId = document.querySelector("#id")
let inputNombre = document.querySelector("#nombre")
let inputPrecio = document.querySelector("#precio")

window.addEventListener('DOMContentLoaded', function () {


    rellenarTabla();




});

async function rellenarTabla() {
    form.style.display = 'none';
    table.style.display = 'block';

    const respuesta = await fetch(URL);
    const productos = await respuesta.json();

    tbody.innerHTML = "";

    for (const producto of productos) {
        const tr = this.document.createElement('tr');
        tr.innerHTML = `
        <th>${producto.id}</th>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="javascript:editar(${producto.id})">Editar</a>
            <a href="javascript:borrar(${producto.id})">Borrar</a>
        </td>
        
        `;
        tbody.appendChild(tr);
    }

}

async function editar(id) {
    console.log('EDITAR', id);

    const respuesta = await fetch(URL + id);
    const producto = await respuesta.json();

    inputId.value = producto.id;
    inputNombre.value = producto.nombre;
    inputPrecio.value = producto.precio;

    mostrarFormulario();
}
function mostrarFormulario() {
    form.style.display = 'block';
}

async function borrar(id) {
    console.log('BORRAR', id);

    const respuesta = await fetch(URL + id, {
        method: 'DELETE'
    });
   
    rellenarTabla();

}

function add() {
    console.log('ADD');
    form.reset();

    mostrarFormulario();
}

async function guardar() {
    console.log('guardar');
    const producto = { nombre: inputNombre.value, precio: +inputPrecio.value };

    if (id.value) {
        producto.id = +id.value;

        const respuesta = await fetch(URL + producto.id, {
            method: 'PUT',
            body: JSON.stringify(producto),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        
    } else {
        const respuesta = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(producto),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    rellenarTabla();

}


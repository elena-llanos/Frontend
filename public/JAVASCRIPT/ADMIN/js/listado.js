


let productos = [

    {
        id: 1,
        nombre: 'producto 1',
        precio: 100
    },
    {
        id: 2,
        nombre: 'producto 2',
        precio: 200
    },
    {
        id: 3,
        nombre: 'producto 3',
        precio: 300
    }
]

let tbody = this.document.querySelector('tbody');
let form = this.document.querySelector('form')
let table = document.querySelector('table');
let inputId = document.querySelector("#id")
let inputNombre = document.querySelector("#nombre")
let inputPrecio = document.querySelector("#precio")

window.addEventListener('DOMContentLoaded', function () {


    rellenarTabla();




});

function rellenarTabla() {
    form.style.display = 'none';
    table.style.display = 'block';
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

function editar(id) {
    console.log('EDITAR', id);

    const producto = productos.find(producto => producto.id === id);

    inputId.value = producto.id;
    inputNombre.value = producto.nombre;
    inputPrecio.value = producto.precio;

    mostrarFormulario();
}
function mostrarFormulario() {
    form.style.display = 'block';
}

function borrar(id) {
    console.log('BORRAR', id);

    productos = productos.filter(producto => producto.id !== id);
    console.log(productos);
    rellenarTabla();

}

function add() {
    console.log('ADD');
    form.reset();

    mostrarFormulario();
}

function guardar() {
    console.log('guardar');
    const producto = { nombre: inputNombre.value, precio: +inputPrecio.value };

    if (id.value) {
        producto.id = +id.value;

        productos[productos.findIndex(p => p.id === producto.id)] = producto;
    } else {
        if (productos.length) {
            const ids = productos.map(producto => producto.id);
            const maximoId = Math.max(...ids);
            producto.id = maximoId + 1;
        }
        else {
            producto.id = 1;
        }

        productos.push(producto);
    }

    rellenarTabla();

}
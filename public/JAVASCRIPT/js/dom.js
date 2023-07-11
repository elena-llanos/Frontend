window.addEventListener('DOMContentLoaded' , function(){
    let  h1 = this.document.querySelector('h1');

    console.log(h1);
    h1.innerHTML = 'Modificado por JavaScript';


    const input  = this.document.querySelector('input');
    const boton  = this.document.querySelector('button');
    const span  = this.document.querySelector('span');

    boton.addEventListener('click' , function(){
        span.innerHTML = 'Hola ' + input.value;
    });


    const coleccion = ['uno', 'dos', 'tres'];

    const ul = this.document.querySelector('ul');

    for(let dato of coleccion){
        const li = this.document.createElement('li');
        li.innerHTML = dato;

        ul.appendChild(li);

    }
});
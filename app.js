// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de amigos
let listaAmigos = [];


// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let amigoUsuario = document.getElementById('amigo').value.trim(); // Eliminar espacios extra
    
    if (amigoUsuario === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    if (listaAmigos.includes(amigoUsuario)) {
        alert('Ese nombre ya está en la lista');
    } else {
        listaAmigos.push(amigoUsuario);
        actualizarLista();
    }
    
    limpiar();
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}

// Función para limpiar el campo de entrada
function limpiar() {
    document.getElementById('amigo').value = '';
}

// Función para validar el sorteo antes de ejecutarlo
function validarSorteo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
    sortearAmigo();
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos.splice(indiceAleatorio, 1)[0]; // Remueve el nombre sorteado de la lista
    
    asignarTextoElemento('#resultado', `¡El amigo secreto es: ${amigoSorteado}!`);
    
    actualizarLista(); // Actualizar la lista tras eliminar un nombre
}

// Función para reiniciar la lista de amigos
function reiniciarLista() {
    listaAmigos = []; // Vacía la lista
    actualizarLista(); // Refresca la interfaz
    asignarTextoElemento('#resultado', ''); // Borra el resultado del sorteo
}

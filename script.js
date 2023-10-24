
let numeroAzar = Math.floor(Math.random() * 100 + 1); // expande el rango desde 1 a 100
// floor redondea para abajo  entre 1 y 100
console.log(numeroAzar)
let numeroEntrada = document.getElementById('numeroEntrada') // numero 
let mensaje = document.getElementById('mensaje'); // parrafo con msj
let intento = document.getElementById('intento') // intentos
let cantidad = 10;



// btn restart 

function lanzarConfeti() {
    const duration = 15 * 1000; 
    const options = {
        particleCount: 250, // Cantidad de de confetis
        spread: 200, // Extensión del confeti
    };

    // Lanza el confeti
    confetti(options);

    setTimeout(() => {
        confetti.reset();
    }, 2500);
}




function mostrarFelicidades() {
    const texto = document.createElement('div');
    texto.textContent = 'FELICITACIONES!';
    texto.style.fontSize = '3rem';
    texto.style.position = 'absolute';
    texto.style.top = '85%';
    texto.style.left = '50%';
    texto.style.color = '#2dc653';
    texto.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(texto);

    anime({
        targets: texto,
        opacity: 1,
        scale: 1.5,
        duration: 1000,
        easing: 'easeOutExpo',
    });
}

const restart = document.querySelector('.restart')

restart.addEventListener('click', () => {


    window.location.reload();

})


intento.textContent = cantidad;

// Event ejecucion
function chequearResultado(btnDesabilitar) {
    if (cantidad <= 0) {
        intento.textContent = 'No tienes más intentos';
        let btnDesabilitar = document.querySelector('.desabilitar');
        btnDesabilitar.disabled = true;
        btnDesabilitar.classList.add('disabled');
        return; 
    }

    let numeroIngresado = parseInt(numeroEntrada.value);

    // Resto la cantidad de intentos solo si el número ingresado es válido
    if (!isNaN(numeroIngresado)) {
        cantidad--;
        intento.textContent = cantidad;
    }

    if (cantidad <= 0) {
        // Deshabilitar el botón cuando los intentos lleguen a cero
        chequearResultado(btnDesabilitar)
       
    }



    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Introduce un número válido entre 1 y 100';
        mensaje.style.color = 'white';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        lanzarConfeti();
        mostrarFelicidades();
        mensaje.textContent='Bien jugado🥳🥳🥳'
        mensaje.style.color='Green'
        let wp=document.querySelector('.wp')
       wp.style.display='none'
   chequearResultado(btnDesabilitar)


    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El número debe ser más alto';
        mensaje.style.color = 'red';
       
    } else {
        mensaje.textContent = 'El número debe ser más bajo';
        mensaje.style.color = 'red';
      
    }
}







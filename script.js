let hambre = 5;
let energia = 5;
let felicidad = 5;

const actualizarEstado = () => {
    document.getElementById('hambre').innerText = hambre;
    document.getElementById('energia').innerText = energia;
    document.getElementById('felicidad').innerText = felicidad;
};

const mostrarMensaje = (mensaje) => {
    document.getElementById('mensaje').innerText = mensaje;
};

const alimentar = () => {
    if (hambre < 10) {
        hambre++;
        mostrarMensaje('¡Delicioso!');
    } else {
        mostrarMensaje('No tengo hambre.');
    }
    actualizarEstado();
};

const dormir = () => {
    if (energia < 10) {
        energia++;
        mostrarMensaje('¡Qué siesta tan buena!');
    } else {
        mostrarMensaje('No tengo sueño.');
    }
    actualizarEstado();
};

const jugar = () => {
    if (felicidad < 10) {
        felicidad++;
        mostrarMensaje('¡Qué divertido!');
    } else {
        mostrarMensaje('No quiero jugar más.');
    }
    actualizarEstado();
};

// Reduce stats over time
setInterval(() => {
    hambre = Math.max(hambre - 1, 0);
    energia = Math.max(energia - 1, 0);
    felicidad = Math.max(felicidad - 1, 0);

    if (hambre === 0 || energia === 0 || felicidad === 0) {
        mostrarMensaje('¡Oh no! Tu Tamagotchi está muy triste.');
    }

    actualizarEstado();
}, 5000);

actualizarEstado();

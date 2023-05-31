import { estaEnSesion, cerrarSesion } from "./session.js";

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const biografia = document.querySelector('#biografia').value;
    const fotoPerfil = document.querySelector('#foto-perfil').files[0];
    const fotoBanner = document.querySelector('#foto-banner').files[0];

    if (nombre.trim() === '') {
        alert('Por favor, introduce un nombre válido.');
        return;
    }
    if (biografia.trim() === '') {
        alert('Por favor, introduce una biografía válida.');
        return;
    }
    if (!fotoPerfil || !fotoBanner) {
        alert('Por favor, selecciona ambas fotos.');
        return;
    }

    actualizarInterfazUsuario(nombre, biografia, fotoPerfil, fotoBanner);
    alert('Su perfil se actualizó correctamente');
});

const render = async () => {
    estaEnSesion();

    const botonCerrar = document.querySelector("#cerrar");
    botonCerrar.addEventListener("click", () => {
        cerrarSesion();
    });
};

const actualizarInterfazUsuario = (nombre, biografia, fotoPerfil, fotoBanner) => {
    const nombreElemento = document.querySelector('#nombre-preview');
    nombreElemento.textContent = nombre;

    const biografiaElemento = document.querySelector('#biografia-preview');
    biografiaElemento.textContent = biografia;

    const fotoPerfilElemento = document.querySelector('#foto-perfil-preview');
    const fotoPerfilURL = URL.createObjectURL(fotoPerfil);
    fotoPerfilElemento.src = fotoPerfilURL;

    const fotoBannerElemento = document.querySelector('#foto-banner-preview');
    const fotoBannerURL = URL.createObjectURL(fotoBanner);
    fotoBannerElemento.src = fotoBannerURL;
};

window.onload = render;

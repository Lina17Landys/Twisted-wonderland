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
        cerrarSesionWithoutAlert(); 
    });
};

class InterfazUsuario {
    constructor(nombre, biografia, fotoPerfil, fotoBanner) {
      this.nombreElemento = document.querySelector('#nombre-preview');
      this.biografiaElemento = document.querySelector('#biografia-preview');
      this.fotoPerfilElemento = document.querySelector('#foto-perfil-preview');
      this.fotoBannerElemento = document.querySelector('#foto-banner-preview');
  
      this.actualizar(nombre, biografia, fotoPerfil, fotoBanner);
    }
  
    actualizar(nombre, biografia, fotoPerfil, fotoBanner) {
      this.nombreElemento.textContent = nombre;
      this.biografiaElemento.textContent = biografia;
      this.fotoPerfilElemento.src = URL.createObjectURL(fotoPerfil);
      this.fotoBannerElemento.src = URL.createObjectURL(fotoBanner);
    }
  }
  
  const actualizarInterfazUsuario = (nombre, biografia, fotoPerfil, fotoBanner) => {
    const interfazUsuario = new InterfazUsuario(nombre, biografia, fotoPerfil, fotoBanner);
  };
  
const cerrarSesionWithoutAlert = () => {
    localStorage.removeItem("usuario");
    window.location.reload();
};

window.onload = render;

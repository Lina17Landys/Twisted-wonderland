import { agregarAFavoritos, obtenerFavoritos, eliminarFavorito } from "./session.js";

const PERSONAJES = "personajes";

export class Personaje {
    #id = "";
    #icon = "";

    constructor(id, icon) {
        this.#id = id;
        this.#icon = icon;
    }

    render() {
        const icon = document.createElement("img");
        icon.id = this.#obtenerId();
        icon.src = this.#icon;
        icon.classList.add("icon");
        return icon;
    }

    addClickListener() {
        const id = this.#obtenerId();
        const icon = document.querySelector("#" + id);
        icon.addEventListener("click", async () => {
            agregarAFavoritos(this.#id);
            await cargarFavoritos();
        })
    }

    #obtenerId() {
        return "icon-" + this.#id;
    }
}


export const cargarFavoritos = async () => {
    const divFavoritos = document.querySelector("#likeContainer");
    divFavoritos.innerHTML = "";

    const favoritosIds = obtenerFavoritos();

    const personajes = await cargarPersonajes();

    for (const personaje of personajes) {
        if (favoritosIds.includes(personaje.id)) {
            const icon = document.createElement("img");
            icon.src = personaje.icon;
            icon.classList.add("icon");
            divFavoritos.appendChild(icon);

            icon.addEventListener("click", () => {
                eliminarFavorito(personaje.id);
                cargarFavoritos();
            })
        }
    }
}

export const cargarPersonajes = async () => {
    const personajes = localStorage.getItem(PERSONAJES);

    if (personajes === null) {
        const request = await fetch("https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json");
        const data = await request.json();

        localStorage.setItem(PERSONAJES, JSON.stringify(data));
        return data;
    }

    return JSON.parse(personajes);
}

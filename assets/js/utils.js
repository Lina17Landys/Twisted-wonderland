export const obtenerPersonaje = async () => {
    try {
        const response = await fetch("https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los datos del personaje:", error);
        throw error;
    }
};

export class Personaje {
    constructor(image, name, id) {
        this.imagen = image;
        this.name = name;
        this.id = id;
    }

    render() {
        const div = document.createElement('div');
        const jpg = document.createElement('img');
        const name = document.createElement('p');

        jpg.id = "image" + this.id;
        jpg.classList.add("imagen");
        jpg.src = this.imagen; // Agregar la fuente de la imagen

        name.innerHTML = this.name;

        div.appendChild(jpg);
        div.appendChild(name);
        return div;
    }

    addClickListener() {
        const image = document.querySelector("#image" + this.id);
        image.addEventListener("click", () => {
            window.location = "/object.html?characterId=" + this.id;
        });
    }
}

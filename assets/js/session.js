const PERSONAS = "personas";
const USUARIO = "usuario";

export const estaEnSesion = () => {
    const usuario = localStorage.getItem(USUARIO);

    if (usuario === null) {
        window.location.href = "./login.html";
    }

}

const usuarioExiste = (correoUsuario, contrasenaUsuario) => {
    const personas = localStorage.getItem(PERSONAS);

    if (personas !== null) {
        const personasArray = JSON.parse(personas);

        for (const persona of personasArray) {
            if (correoUsuario === persona.email && contrasenaUsuario === persona.password) {
                return true;
            }
        }
    }

    return false;
}

export const validarUsuario = (correoUsuario, contrasenaUsuario) => {
    if(usuarioExiste(correoUsuario, contrasenaUsuario) === true) {
        localStorage.setItem(USUARIO, correoUsuario);
        window.location.href = "./mainpage.html";
    } else {
        alert("El usuario no existe");
    }
}

export const registrarPersona = (correoPersona, contrasenaPersona) => {
    const personas = localStorage.getItem(PERSONAS);

    if (personas === null) {
        const persona = {
            email: correoPersona,
            password: contrasenaPersona,
            favoritos: []
        }

        const personasArray = [persona];

        localStorage.setItem(PERSONAS, JSON.stringify(personasArray));
    } else {
        const personasArray = JSON.parse(personas);

        const persona = {
            email: correoPersona,
            password: contrasenaPersona,
            favoritos: []
        }

        personasArray.push(persona);
        localStorage.setItem(PERSONAS, JSON.stringify(personasArray));
    }
}

export const actualizarLista = () => {
    const personas = localStorage.getItem(PERSONAS);
  
    if (personas !== null) {
      const personasArray = JSON.parse(personas);
  
      for (const persona of personasArray) {
        const mensaje = `${persona.email} ${persona.password}`;
       }
    }
  };
  

export const cerrarSesion = () => {
    localStorage.removeItem(USUARIO);
    window.location.reload();
}

export const obtenerUsuario = () => {
    const usuario = localStorage.getItem(USUARIO);
    return usuario;
}

const existeFavorito = (ids, id) => {
    for (const idFavorito of ids) {
        if (idFavorito === id) {
            return true;
        }
    }

    return false;
}

export const agregarAFavoritos = (id) => {
    const email = localStorage.getItem(USUARIO);
    const usuarios = localStorage.getItem(PERSONAS);

    if (email !== null && usuarios !== null) {
        const usuariosJSON = JSON.parse(usuarios);
        
        for (const persona of usuariosJSON) {
            if (persona.email === email) {
                if (existeFavorito(persona.favoritos, id) === false) {
                    persona.favoritos.push(id);
                }
            }
        }

        localStorage.setItem(PERSONAS, JSON.stringify(usuariosJSON));
    }
}

export const obtenerFavoritos = () => {
    const email = localStorage.getItem(USUARIO);
    const usuarios = localStorage.getItem(PERSONAS);

    if (email !== null && usuarios !== null) {
        const usuariosJSON = JSON.parse(usuarios);
        
        for (const persona of usuariosJSON) {
            if (persona.email === email) {
                return persona.favoritos;
            }
        }
    }

    return [];
}

const filtrarFavoritos = (favoritos, id) => {
    const nuevosFavoritos = [];

    for (const favorito of favoritos) {
        if (favorito !== id) {
            nuevosFavoritos.push(favorito);
        }
    }

    return nuevosFavoritos;
}

export const eliminarFavorito = (id) => {
    const email = localStorage.getItem(USUARIO);
    const usuarios = localStorage.getItem(PERSONAS);

    if (email !== null && usuarios !== null) {
        const usuariosJSON = JSON.parse(usuarios);
        
        for (const persona of usuariosJSON) {
            if (persona.email === email) {
                persona.favoritos = filtrarFavoritos(persona.favoritos, id);
            }
        }

        localStorage.setItem(PERSONAS, JSON.stringify(usuariosJSON));
    }
}


const SERVER_DOMAIN = 'http://inmobiliaria2022.somee.com'

export const getTipoInmuebles = async () => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/tipoinmuebles`)
        
        return response.json();
    } catch {
        throw new Error('could not fetch Inmuebles');
    }
};

export const getTipoInmueble = async (id) => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/tipoinmuebles/${id}`)
        return response.json();
    } catch {
        throw new Error('could not fetch Inmuebles');
    }
};

export const addTipoInmuebles = async (data) => {
    console.log(data);
    let config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(`${SERVER_DOMAIN}/tipoinmuebles`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch Inmuebles');
    }
};

export const editTipoInmuebles = async (data) => {
    console.log(data);
    let config = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(`${SERVER_DOMAIN}/tipoinmuebles/${data.id_inmueble}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch Inmuebles');
    }
};

export const deleteTipoInmuebles = async (id) => {
    console.log(id);
    let config = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(`${SERVER_DOMAIN}/tiponmuebles/${id}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch Inmuebles');
    }
};


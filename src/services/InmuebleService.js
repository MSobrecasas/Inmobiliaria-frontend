const SERVER_DOMAIN = 'http://inmobiliaria2022.somee.com'

export const getInmuebles = async () => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/inmuebles`)
        
        return response.json();
    } catch {
        throw new Error('could not fetch Inmuebles');
    }
};

export const getInmueble = async (id) => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/inmuebles/${id}`)
        return response.json();
    } catch {
        throw new Error('could not fetch Inmuebles');
    }
};

export const addInmuebles = async (data) => {
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
        const response = await fetch(`${SERVER_DOMAIN}/inmuebles`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch Inmuebles');
    }
};

export const editInmuebles = async (data) => {
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
        const response = await fetch(`${SERVER_DOMAIN}/Inmuebles/${data.id_inmueble}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch Inmuebles');
    }
};

export const deleteInmuebles = async (id) => {
    console.log(id);
    let config = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(`${SERVER_DOMAIN}/Inmuebles/${id}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch Inmuebles');
    }
};


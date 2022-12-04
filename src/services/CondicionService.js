const SERVER_DOMAIN = 'http://inmobiliaria2022.somee.com'

export const getCondicions = async () => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/condicions`)
        
        return response.json();
    } catch {
        throw new Error('could not fetch condicions');
    }
};

export const getCondicion = async (id) => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/condicions/${id}`)
        return response.json();
    } catch {
        throw new Error('could not fetch condicions');
    }
};

export const addCondicions = async (data) => {
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
        const response = await fetch(`${SERVER_DOMAIN}/condicions`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch condicions');
    }
};

export const editCondicions = async (data) => {
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
        const response = await fetch(`${SERVER_DOMAIN}/condicions/${data.id_condicion}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch condicions');
    }
};

export const deleteCondicions = async (id) => {
    console.log(id);
    let config = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(`${SERVER_DOMAIN}/condicions/${id}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch condicions');
    }
};


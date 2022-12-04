const SERVER_DOMAIN = 'http://inmobiliaria2022.somee.com'

export const getClientes = async () => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/clientes`)
        
        return response.json();
    } catch {
        throw new Error('could not fetch clientes');
    }
};

export const getCliente = async (id) => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/clientes/${id}`)
        return response.json();
    } catch {
        throw new Error('could not fetch clientes');
    }
};

export const addClientes = async (data) => {
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
        const response = await fetch(`${SERVER_DOMAIN}/clientes`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch clientes');
    }
};

export const editClientes = async (data) => {
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
        const response = await fetch(`${SERVER_DOMAIN}/clientes/${data.id_cliente}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch clientes');
    }
};

export const deleteClientes = async (id) => {
    console.log(id);
    let config = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(`${SERVER_DOMAIN}/clientes/${id}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch clientes');
    }
};


const SERVER_DOMAIN = 'http://inmobiliaria2022.somee.com'

export const getVentas = async () => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/ventas`)
        
        return response.json();
    } catch {
        throw new Error('could not fetch ventas');
    }
};

export const getVenta = async (id) => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/ventas/${id}`)
        return response.json();
    } catch {
        throw new Error('could not fetch ventas');
    }
};

export const addVentas = async (data) => {
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
        const response = await fetch(`${SERVER_DOMAIN}/ventas`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch ventas');
    }
};

export const editVentas = async (data) => {
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
        const response = await fetch(`${SERVER_DOMAIN}/ventas/${data.id_venta}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch ventas');
    }
};

export const deleteVentas = async (id) => {
    console.log(id);
    let config = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(`${SERVER_DOMAIN}/ventas/${id}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch ventas');
    }
};


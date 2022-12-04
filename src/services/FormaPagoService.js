const SERVER_DOMAIN = 'http://inmobiliaria2022.somee.com'

export const getFormaFagoes = async () => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/formapagoes`)
        
        return response.json();
    } catch {
        throw new Error('could not fetch formapagoes');
    }
};

export const getFormaPago = async (id) => {
    try {
        const response = await fetch(`${SERVER_DOMAIN}/formapagoes/${id}`)
        return response.json();
    } catch {
        throw new Error('could not fetch formapagoes');
    }
};

export const addFormaPagoes = async (data) => {
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
        const response = await fetch(`${SERVER_DOMAIN}/formapagoes`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch formapagoes');
    }
};

export const editFormaPagoes = async (data) => {
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
        const response = await fetch(`${SERVER_DOMAIN}/formapagoes/${data.id_forma_pago}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch formapagoes');
    }
};

export const deleteFormaPagoes = async (id) => {
    console.log(id);
    let config = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(`${SERVER_DOMAIN}/formapagoes/${id}`, config)
        return response.json();
    } catch {
        throw new Error('could not fetch formapagoes');
    }
};


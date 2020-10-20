import api from './api';

interface Response {
    data: {
        token: string;
        user: { email: string }
    }
}

export async function signIn(body: any): Promise<Response>{
    return await api.post('autheticate', body);
}
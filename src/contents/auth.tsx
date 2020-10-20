import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from './../services/auth';
import api from './../services/api';

interface AuthContextData {
    signed: boolean;
    user: object | null; // Verificar dps.
    // signIn(): Promise<any>;
    signIn(body: any): Promise<any>;
    signOut(): void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: any) {

    const [ user, setUser ] = useState<object | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        async function loadingStorageData() {
            const storageUser = window.localStorage.getItem('@OrphanageAuth:user');
            const storageToken = window.localStorage.getItem('@OrphanageAuth:token');

            if (storageToken && storageUser) {
                console.log(storageToken)
                console.log(storageUser)
                api.defaults.headers.Authorization = `Bearer ${JSON.stringify(storageToken)}`;
                setUser(JSON.parse(JSON.stringify(storageUser)));
            }
            setLoading(false);

        }

        loadingStorageData();

    }, [])

    async function signIn(body: any) {
        const { data } = await auth.signIn(body);
        console.log(data);

        setUser(data.user);

        api.defaults.headers.Authorization = `Bearer ${data.token}`;

        window.localStorage.setItem('@OrphanageAuth:user', JSON.stringify(data.user));
        window.localStorage.setItem('@OrphanageAuth:token', data.token);

    }

    function signOut() {
        setUser(null);
        window.localStorage.removeItem('@OrphanageAuth:user');
        window.localStorage.removeItem('@OrphanageAuth:token');
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, loading,  signOut }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
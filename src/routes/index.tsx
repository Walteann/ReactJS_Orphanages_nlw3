import React from 'react';
import { useAuth } from '../contents/auth';


import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

export default function RoutesRestrictAccess () {

    const { signed, loading } = useAuth();


    if (loading) {
        return (
            <p>Carregando...</p>
        )
    }


    return signed ? <AppRoutes/> : <AuthRoutes />
}
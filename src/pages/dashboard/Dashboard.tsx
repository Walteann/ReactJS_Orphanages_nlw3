import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth }from '../../contents/auth';


import './../../styles/pages/dashboard.css'


export default function Dashboard() {
    const { signOut } = useAuth();

    async function handlerSingOut() {   
        signOut();

    }

    return (
        <div>
            <button onClick={handlerSingOut}>Sign Out</button>

            <Link to="/">
                Mapa
            </Link>
        </div>
    )
}
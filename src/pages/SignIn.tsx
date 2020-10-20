import React, { useState } from 'react';
import {useAuth} from '../contents/auth';
import logoAuthSvg from './../images/logo-auth.svg';
import { FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';


import './../styles/pages/sign-in.css';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signed, signIn } = useAuth();

    console.log(signed)

    async function handlerSingIn() {
        signIn({email, password});

    }

    return (
        <div className="container">

            <div className="noAside">
                <div className="center">
                    <img src={logoAuthSvg} alt="Logo Happy"/>
                    <div className="location">
                        <strong>Pernambuco</strong>
                        <span>Recife</span>
                    </div>
                </div>
            </div>

            <div className="formulario">

                <div className="main">
                    <legend>Fazer login</legend>
                    <div className="input-form">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="input-form">
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div className="footer-input-form">
                        <div className="checkbox-form">
                            <label htmlFor="lembrar">
                                <input id="lembrar" type="checkbox"/>
                                <span className="checkmark"></span>    
                                <span id="label-check">Lembrar-me</span>
                            </label>

                        </div>

                        <Link className="esqueci-senha" to="/esqueci-senha">
                            Esqueci minha senha
                        </Link>

                    </div>


                    <button className="btn-entrar" onClick={handlerSingIn}>Entrar</button>

                    <Link className="btn-voltar" to="/">
                        <FiArrowLeft size={24} color="#15b6d6" />
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
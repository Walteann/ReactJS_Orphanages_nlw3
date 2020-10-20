import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './../styles/pages/landing.css';

import logoImg from './../images/logo.svg';


function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy"/>
                <div className="location">
                    <strong>Pernambuco</strong>
                    <span>Recife</span>
                </div>

                <main>
                    <h1>Leve a felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>


                <Link to="/auth" className="access-restrict">
                    Acesso restrito
                </Link>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
                </Link>
            </div>
        </div>
    );
}

export default Landing;
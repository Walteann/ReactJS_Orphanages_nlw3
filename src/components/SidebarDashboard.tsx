import React from 'react';
import { FiPower, FiMapPin, FiAlertCircle } from 'react-icons/fi';

import mapMarkerImg from './../images/map-marker.svg';

import '../styles/components/sidebar-dashboard.css'
import { useAuth } from '../contents/auth';
import { Link, useLocation } from 'react-router-dom';

export default function SidebarDashboard() {

    const { pathname } = useLocation();
    

    const { signOut } = useAuth();

    return (
        <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        <section>
            <Link to="/dashboard" className={pathname === '/dashboard' ? 'active' : ''}>
                <FiMapPin size={24} color={pathname === '/dashboard' ? '#0089A5' : '#FFF'}/>
            </Link>
            <Link to="/pedentes" className={pathname === '/pedentes' ? 'active' : ''}>
                <FiAlertCircle size={24} color={pathname === '/pedentes' ? '#0089A5' : '#FFF'}/>
            </Link>
        </section>

        <footer>
          <button type="button" onClick={signOut}>
            <FiPower size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    )
}
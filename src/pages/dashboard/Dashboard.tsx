import React, { useEffect, useState } from 'react';
import { Map, Marker, TileLayer } from "react-leaflet"

import { FiEdit3, FiTrash } from 'react-icons/fi';

import SidebarDashboard from './../../components/SidebarDashboard';
import mapIcon from './../../utils/mapIcon';
import './../../styles/pages/dashboard.css'

import api from './../../services/api';

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export default function Dashboard() {

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response =>  {
            setOrphanages(response.data);
        })
    }, [])


    return (
        <div id="dashboard">
        <SidebarDashboard />
            <div className="flex">
                <div className="container">
                    <div className="title">
                        <h2>Orfanatos Cadastrados</h2>
                        <span>2 Orfanatos</span>
                    </div>
                    <hr/>
                    <div className="orphanagesMaps">
                        {orphanages.map(orphanage => {
                            return (
                                <div className="card-map">
                                    <Map 
                                        center={[orphanage.latitude, orphanage.longitude]} 
                                        zoom={20} 
                                        style={{ width: '100%', height: 200 }}
                                        dragging={false}
                                        touchZoom={false}
                                        zoomControl={false}
                                        scrollWheelZoom={false}
                                        doubleClickZoom={false}
                                    >
                                        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                        <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
                                    </Map>
                                    <div className="footer-map">
                                        <h3>{orphanage.name}</h3>
                                        <div className="footer-buttons">

                                            <button>
                                                <FiEdit3 size={20} color="#15C3D6"/>
                                            </button>
                                            <button>
                                                <FiTrash size={20} color="#15C3D6"/>
                                            </button>


                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}
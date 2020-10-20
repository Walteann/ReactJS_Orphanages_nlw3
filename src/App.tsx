import React from 'react';

import Routes from './routes';


import './styles/global.css';
import 'leaflet/dist/leaflet.css';
import { AuthProvider } from './contents/auth';

function App() {
  return (
    <AuthProvider>

      <Routes />
    </AuthProvider>
  );
}

export default App;

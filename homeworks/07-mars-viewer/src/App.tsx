import React from 'react';

import { Routes } from './features/routes/Routes';
import { MarsViewer } from './features/mars-viewer/MarsViewer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
        <Routes />
        <MarsViewer />
    </div>
  );
}

export default App;

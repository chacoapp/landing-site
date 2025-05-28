import React from 'react';
import ReactDOM from 'react-dom/client';
import ChacoConcept from './chacoConcept';
import './index.css';   // ← this must point here

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChacoConcept />
    </React.StrictMode>
);

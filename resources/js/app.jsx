import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import MainApp from './MainApp.jsx';
import '../css/app.css';

const rootElement = document.getElementById('app');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <MainApp />
        </React.StrictMode>
    );
} else {
    console.error('Root element #app not found');
}

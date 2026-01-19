import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import MainApp from './MainApp';
import '../css/app.css';

const rootElement = document.getElementById('app');

if (rootElement) {
    try {
        const root = createRoot(rootElement);
        root.render(
            <React.StrictMode>
                <MainApp />
            </React.StrictMode>
        );
        console.log('React app mounted successfully');
    } catch (error) {
        console.error('Error mounting React app:', error);
        rootElement.innerHTML = `
            <div style="padding: 2rem; text-align: center;">
                <h1 style="color: #ef4444;">Error Loading Application</h1>
                <p style="color: #6b7280;">${error instanceof Error ? error.message : 'Unknown error'}</p>
                <p style="color: #9ca3af; font-size: 0.875rem; margin-top: 1rem;">Check console for details</p>
            </div>
        `;
    }
} else {
    console.error('Root element #app not found');
    document.body.innerHTML = `
        <div style="padding: 2rem; text-align: center;">
            <h1 style="color: #ef4444;">Error: Root element not found</h1>
            <p style="color: #6b7280;">Element with id "app" is missing from the DOM</p>
        </div>
    `;
}

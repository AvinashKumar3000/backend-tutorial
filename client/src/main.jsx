// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { DataProvider } from './context/DataContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <DataProvider>
        <App />
        </DataProvider>
    </BrowserRouter>,
);

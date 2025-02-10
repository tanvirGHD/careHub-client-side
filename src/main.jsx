import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';      // Global CSS
import './App.css';        // App specific CSS// Make sure this provides context properly
import { RouterProvider } from 'react-router-dom';
import router from './router/router'; 
import AuthProvider from './provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router()} />
    </AuthProvider>
  </StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';      // Global CSS
import './App.css';        // App specific CSS
import App from './App';   // Correctly importing App component
import AuthProvider from './provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <App />  {/* Render the App component */}
   </AuthProvider>
  </StrictMode>
);

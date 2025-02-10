import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';      // Global CSS
import './App.css';        // App specific CSS
import { RouterProvider } from 'react-router-dom';
import router from './router/router'; 
import AuthProvider from './provider/AuthProvider';

// Import React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap everything with QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router()} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
import 'dotenv/config';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { homeRoutes } from './pages/home/router';
import { Layout } from './common/view/components/layout';
import './common/view/styles/global.css';
// Create Router Client
const router = createBrowserRouter([...homeRoutes]);
// Create a Query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </QueryClientProvider>
  </React.StrictMode>,
);

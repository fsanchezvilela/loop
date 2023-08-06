import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { homeRoutes } from './pages/home/router';
import { Layout } from './common/view/components/layout';
import './common/view/styles/global.css'

const router = createBrowserRouter([...homeRoutes,]);
console.log(router)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode >,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
import ErrorElementRoot from './ErrorElementRoot.tsx'
import ChildrenElementRoot, { loader as loaderRoot } from './ChildrenElementRoot.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElementRoot />,
    // Route Children Navigation 
    children: [
      {
        loader: loaderRoot,
        path: "/:podcastId",
        element: <ChildrenElementRoot />,
      },
    ],
  },
  // Route Page Navigation
  {
    path: "/podcast/:podcastId",
    loader: loaderRoot,
    element: <ChildrenElementRoot />,
    errorElement: <ErrorElementRoot />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

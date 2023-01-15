import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import ProjectPage from "./pages/ProjectPage"
import './index.css'

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "project",
        element: <ProjectPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

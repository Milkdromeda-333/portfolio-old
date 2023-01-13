import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "portfolio",
        element: <PortfolioPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

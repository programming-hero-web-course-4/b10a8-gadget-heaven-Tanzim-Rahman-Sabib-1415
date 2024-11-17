import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import ErrorPage from './ErrorPage.jsx'
import Hero from './components/Hero/Hero.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Gadgetdetail from './components/Gadgetdetail/Gadgetdetail.jsx'
import Root from './root.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import Faq from './components/Faq/Faq.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home></Home>,
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      path: "/",
      element: <Hero></Hero>,
      loader: () => fetch('/gadgetdata.json')
    },

    {
      path: "statistics",
      element: <Statistics></Statistics>,
      loader: () => fetch('/gadgetdata.json'),
    },

    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      loader: () => fetch('/gadgetdata.json'),
    },

    {
      path: "faq",
      element: <Faq></Faq>,
  
    },
    
    {
      path: "gadgets/:product_id",
      element: <Gadgetdetail ></Gadgetdetail>,
      loader: () => fetch('/gadgetdata.json'),
    },

    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

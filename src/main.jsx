import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './components/errorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/index.jsx';
import Hero from './components/hero/Hero.jsx';
import Carros from './components/carros/Carros.jsx';
import Acessorios from './components/acessorios/Acessorios.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "carros",
    element: <Carros/>
  },
  {
    path: "acessorios",
    element: <Acessorios/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NuevoCliente, {
  action as nuevoClienteAction,
} from './pages/NuevoCliente';
import Index, { loader as clientesLoader } from './pages/Index';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    //Layout pricipal compartido en todas las vistas
    path: '/',
    element: <Layout />,
    //Elementos hijos que se inyectan al Outlet del elemento padre en este caso Layout
    children: [
      {
        //Elemento hijo de la ruta index
        index: true,
        element: <Index />,
        loader: clientesLoader, //Indicas el loader del elemento
        errorElement: <ErrorPage />, //Manejo de error boundaries
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

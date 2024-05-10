import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes/MainRoutes.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Register from './Pages/Register/Register.jsx';
import { Toaster } from 'react-hot-toast';
import MyQuery from './Pages/MyQuery/MyQuery.jsx';
import AddQuery from './Pages/AddQuery/AddQuery.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes></MainRoutes>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/my-query',
        element:<MyQuery></MyQuery>
      },
      {
        path:'/add-query',
        element:<AddQuery></AddQuery>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

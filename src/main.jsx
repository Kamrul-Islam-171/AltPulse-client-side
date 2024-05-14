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
import UpdateQuery from './Pages/UpdateQuery/UpdateQuery.jsx';
import QueryDetails from './Pages/QueryDetails/QueryDetails.jsx';
import Queries from './Pages/Queries/Queries.jsx';
import QueryDetailsAll from './Pages/QueryDetailsAll/QueryDetailsAll.jsx';
import MyRecommendations from './Pages/MyRecommendations/MyRecommendations.jsx';
import RecommendationForMe from './Pages/RecommendationForMe/RecommendationForMe.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes></MainRoutes>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element:<PrivateRoute><MyQuery></MyQuery></PrivateRoute>
      },
      {
        path:'/add-query',
        element:<AddQuery></AddQuery>
      },
      {
        path:'/update/:id',
        element:<UpdateQuery></UpdateQuery>
      },
      {
        path:'/query-details/:id',
        element:<QueryDetails></QueryDetails>
      },
      {
        path:'/queries',
        element:<Queries></Queries>
      },
      {
        path:'/query-details-with-all/:id',
        element:<QueryDetailsAll></QueryDetailsAll>
      },
      {
        path:'/myRecommendations',
        element:<PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
      },
      {
        path:'/recommendations-for-me',
        element:<PrivateRoute><RecommendationForMe></RecommendationForMe></PrivateRoute>
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

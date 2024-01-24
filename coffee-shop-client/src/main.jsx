import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Coffee from './Components/Coffee.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Coffees from './Components/Coffees.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Coffees></Coffees>
      },
      {
        path: "/add_coffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/update_coffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-shop-server-1ffisa7uf-askats-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/coffee/:id",
        element: <Coffee></Coffee>,
        loader: ({ params }) => fetch(`https://coffee-shop-server-1ffisa7uf-askats-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch('https://coffee-shop-server-1ffisa7uf-askats-projects.vercel.app/user')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)

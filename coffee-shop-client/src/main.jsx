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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/add_coffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/update_coffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/coffee/:id",
    element: <Coffee></Coffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)

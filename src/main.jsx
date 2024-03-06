import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Newuser from './compunent/Newuser.jsx';
import Update from './compunent/Update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path:"/users",
    element:<Newuser></Newuser>,
    loader:()=>fetch('http://localhost:7000/users')
  },
  {
    path:"/update/:_id",
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:7000/users/${params._id}`)
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)

import React from "react";
import "./index.css"
import Login from "./pages/login/Login.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  }
])

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
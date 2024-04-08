import React from 'react'
import ReactDOM from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello World!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)

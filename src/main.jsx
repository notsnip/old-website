import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { BrowserRouter as Router, HashRouter, Route, createBrowserRouter,RouterProvider} from 'react-router-dom';
import Contact from './components/Contact/Contact.jsx';
import Hero from './components/Hero/Hero.jsx';


const router= createHashRouter([{
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "contact",
        element: <Contact />,
      },]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

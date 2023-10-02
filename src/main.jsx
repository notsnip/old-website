import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, createBrowserRouter,RouterProvider} from 'react-router-dom';
import Contact from './components/contact/Contact.jsx';
import Hero from './components/main/Hero.jsx';


const router= createBrowserRouter([{
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

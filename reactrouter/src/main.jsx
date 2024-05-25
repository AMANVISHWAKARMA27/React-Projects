import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About Us/AboutUs.jsx'
import Contact from './components/Contact Us/ContactUs.jsx'
import Profile from './components/Profile/Profile.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <Layout/>,
    children: [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/aboutus",
        element : <About/>
      },
      {
        path : "/contactus",
        element : <Contact/>
      },
      {
        path : "/profile",
        element : <Profile/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  \ <RouterProvider router={router}/>
  </React.StrictMode>,
)

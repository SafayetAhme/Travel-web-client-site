import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './component/router/Router';
import Home from './component/pages/home/Home';
import SignIn from './component/pages/signIn/SignIn';
import SignUp from './component/pages/sign up/SignUp';
import Tours from './component/pages/tours/Tours';
import AboutUs from './component/pages/about us/AboutUs';
import Blog from './component/pages/blog/Blog';
import ContactUs from './component/pages/contact us/ContactUs';
import Faq from './component/pages/faqpage/Faq';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/tours",
        element: <Tours></Tours>
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/faq",
        element: <Faq></Faq>
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

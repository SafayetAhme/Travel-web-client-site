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
import AuthProvider from './component/providers/AuthProvider';
import Destination from './component/pages/destination/Destination';
import Details from './component/pages/detailspage/Details';
import { HelmetProvider } from 'react-helmet-async';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Dashboard from './component/pages/dashboard/Dashboard';
import AllUsers from './component/pages/dashboard/AllUsers';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AdminRoute from './component/router/AdminRoute';
import AddItems from './component/pages/dashboard/AddItems';
import AdminHome from './component/pages/dashboard/AdminHome';
import Paymenthhistory from './component/pages/dashboard/Paymenthhistory';
import ManageItems from './component/pages/dashboard/ManageItems';
import UpdateItems from './component/pages/dashboard/UpdateItems';
import Paymenth from './component/pages/dashboard/Paymenth';

const queryClient = new QueryClient()

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
        path: "/destination",
        element: <Destination></Destination>
      },
      {
        path: "/payment",
        element: <Paymenth></Paymenth>
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch('http://localhost:5000/menus')
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

  // admin and user dashboard
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "allusers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "additems",
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: "adminhome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "paymenthhistory",
        element: <AdminRoute><Paymenthhistory></Paymenthhistory></AdminRoute>
      },
      {
        path: "manageitems",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: "updateitems/:id",
        element: <AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/menus/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)

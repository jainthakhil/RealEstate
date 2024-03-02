import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/App';
// import { BrowserRouter as Router } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import Salepage from './components/Salepage';
import Agent from './components/Agent';
import Contact from './components/Contact';
import Rentpage from './components/Rentpage';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"sale",
        element:<Salepage />
      },
      {
        path:"rent",
        element:<Rentpage bgColor="#f3f3f3" />
      },
      {
        path:"agent",
        element:<Agent />
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
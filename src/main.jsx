import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import ViewEmployee from './components/ViewEmployee';
import AddEmployee from './components/AddEmployee';
import ViewSingleEmployee from './components/ViewSingleEmployee';
import Authentication from './components/Authentication';
import Dashboard from './components/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
   {
    path: "/viewemployee",
    element: <ViewEmployee/>,
  },
   {
    path: "/addemployee",
    element: <AddEmployee/>,
  },
 
  {
    path: "/view/:id",
    element: <ViewSingleEmployee/>,
  },
   {
    path: "/authentication",
    element: <Authentication/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)

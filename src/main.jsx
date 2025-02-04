import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import AllCategory from './components/AllCategory/AllCategory.jsx';
import AllProducts from './components/AllProducts/AllProducts.jsx';
import Men from './components/Men/Men.jsx';
import Women from './components/Women/Women.jsx';
import Kids from './components/Kids/Kids.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/allCategory',
        element: <AllCategory></AllCategory>
      },
      {
        path:'/products',
        element: <AllProducts></AllProducts>
      },
      {
        path:'/men',
        element: <Men></Men>
      },
      {
        path:'/women',
        element:<Women></Women>
      },
      {
        path:'/kids',
        element:<Kids></Kids>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

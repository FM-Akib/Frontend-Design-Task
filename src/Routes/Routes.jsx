import {
    createBrowserRouter,
  } from "react-router-dom";
import Landing from "../Pages/Landing";
import MainLayout from "../Layout/MainLayout";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Landing/>,
        }
      ]
     
    }
    
      
    
  ]);
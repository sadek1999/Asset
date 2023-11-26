
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import Hr from "../Pages/Home/Hr/Hr";
import Emplay from "../Pages/Home/Emplay/Emplay";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'/login',
            element:<Login></Login>
        },{
        path:'/singup',
        element:<Singup></Singup>
        },{
            path:'/hr',
            element:<Hr></Hr>
        },{
            path:"/employee",
            element:<Emplay></Emplay>
        }
      ]
    },
  ]);

  export default router;
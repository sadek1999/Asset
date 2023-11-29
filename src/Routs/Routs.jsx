
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import Hr from "../Pages/Home/Hr/Hr";
import Emplay from "../Pages/Home/Emplay/Emplay";
import HrLayout from "../Pages/HR/HrLayout/HrLayout";
import Hrhome from "../Pages/HR/HrHome/Hrhme/Hrhome";


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
            path:'/hrsingup',
            element:<Hr></Hr>
        },{
            path:"/employeesingup",
            element:<Emplay></Emplay>
        }
      ]
    },
    {
      path:'/hr',
      element:<HrLayout></HrLayout>,
      children:[
        {
          path:'home',
          element:<Hrhome></Hrhome>
        }
      ]
    }
  ]);

  export default router;

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
import Addasset from "../Pages/HR/pages/Addasset/Addasset";
import Allassets from "../Pages/HR/pages/AssetList/Allasset/Allassets";
import MyEmaployee from "../Pages/HR/pages/employee/MyEmaployee";
import Addemployee from "../Pages/HR/pages/employee/Addemployee";
import Custom from "../Pages/HR/pages/AssetList/Allasset/Custom";
import Emlayout from "../Pages/Empolyee/emlayout/Emlayout";
import EmHome from "../Pages/Empolyee/emhome/Home/EmHome";
import AssetReq from "../Pages/Empolyee/page/AssetRe/AssetReq";
import CastomAsset from "../Pages/Empolyee/page/AssetRe/CastomAsset";
import Hrrout from './PrivateRout/Hrrout';
import Emrout from './PrivateRout/Emrout';
import Myteam from "../Pages/Empolyee/emhome/Home/Myasset/Myteam";
import Myasset from "../Pages/Empolyee/emhome/Home/Myasset/Myasset";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/login',
        element: <Login></Login>
      }, {
        path: '/singup',
        element: <Singup></Singup>
      }, {
        path: '/hrsingup',
        element: <Hr></Hr>
      }, {
        path: "/employeesingup",
        element: <Emplay></Emplay>
      }
    ]
  },

  {
    path: '/hr',
    element: <HrLayout></HrLayout>,
    children: [
      {
        path: 'home',
        element: <Hrrout>  <Hrhome></Hrhome> </Hrrout>
      }, {
        path: 'add',
        element:<Hrrout> <Addasset></Addasset></Hrrout> 
      }, {
        path: 'all',
        element: <Hrrout><Allassets></Allassets></Hrrout>
      }, {
        path: 'myemployee',
        element:<Hrrout> <MyEmaployee></MyEmaployee></Hrrout>

      }, {
        path: 'addemployee',
        element: <Hrrout><Addemployee></Addemployee></Hrrout>
      }, {
        path: 'custom',
        element: <Hrrout><Custom></Custom></Hrrout>
      }
    ]
  },
  {
    path: '/employee',
    element: <Emlayout></Emlayout>,
    children: [
           {
            path:'home',
            element: <Emrout><EmHome></EmHome></Emrout> 
           },
           {
            path:'reqasset',
            element:<Emrout><AssetReq></AssetReq></Emrout>
           },
           {
            path:'custom',
            element:<Emrout><CastomAsset></CastomAsset></Emrout>
            
           },{
            path:'myteam',
            element:<Myteam></Myteam>
           },{
            path:'myasset',
            element:<Myasset></Myasset>
           }
    ]
  }
]);

export default router;
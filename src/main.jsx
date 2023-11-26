import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {

  RouterProvider,
} from "react-router-dom";
import router from './Routs/Routs';
import Authprovider from './Auth/AuthProvider/Authprovider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <div className='max-w-7xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </Authprovider>


  </React.StrictMode>,
)

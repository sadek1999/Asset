import { Outlet } from "react-router-dom";
import Emnavbar from "../emnavbar/Emnavbar";


const Emlayout = () => {
    return (
        <div>
            <Emnavbar></Emnavbar>
            <div className="pt-20">
            <Outlet></Outlet>
            </div>
            
            
        </div>
    );
};

export default Emlayout;
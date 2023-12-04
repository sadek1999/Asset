import { Outlet } from "react-router-dom";
import Emnavbar from "../emnavbar/Emnavbar";
import EmNave from "../emnavbar/EmNave";


const Emlayout = () => {
    return (
        <div>
            <Emnavbar></Emnavbar>
            <div className="flex">
            <div className="w-60 ">
                    <EmNave></EmNave>
                    </div>
                <div className="pt-20 flex-1">
                <Outlet></Outlet>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Emlayout;
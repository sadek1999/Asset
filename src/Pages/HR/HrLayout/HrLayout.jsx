import { Outlet } from "react-router-dom";
import Hrnavbar from "../Hrnavbar/Hrnavbar";
import Navegaiton from "../Hrnavbar/Navegaiton";


const HrLayout = () => {
    return (
        <div>
            <Hrnavbar></Hrnavbar>
            <div className="flex">
                <div className="w-60 ">
                    <Navegaiton></Navegaiton>
                </div>
                <div className="pt-20  flex-1">
                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default HrLayout;
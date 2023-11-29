import { Outlet } from "react-router-dom";
import Hrnavbar from "../Hrnavbar/Hrnavbar";
import Navegaiton from "../Hrnavbar/Navegaiton";


const HrLayout = () => {
    return (
        <div>
            <Hrnavbar></Hrnavbar>
            <div className="pt-10 flex">
                {/* <div className="w-72 ">
                    <Navegaiton></Navegaiton>
                </div> */}
                <div className=" flex-1">
                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default HrLayout;
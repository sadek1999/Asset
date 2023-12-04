import { NavLink } from "react-router-dom";


const EmNave = () => {
    return (
        <div className='bg-blue-400 text-white text-xl menu h-screen pt-20'>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>

                <li><NavLink to={'/employee/assetlist'}> My Asset </NavLink></li>
                <li><NavLink to={'/employee/myteam'}>My Tame</NavLink></li>
                <li><NavLink to={'/employee/reqasset'}>Request for Asset</NavLink></li>

                <li><NavLink to={'/employee/custom'}>Custom Request</NavLink></li>



                <li><NavLink to={"/employee/home"}>Em home</NavLink></li>
            </ul>
        </div>
    );
};

export default EmNave;
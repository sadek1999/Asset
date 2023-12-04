import { NavLink } from "react-router-dom";


const Navegaiton = () => {
    return (
        <div className='bg-blue-400 text-white text-xl menu h-screen pt-20'>
            <ul>
                {/* <li><NavLink to={'/hr/assetlist'}>Asset List</NavLink></li> */}
                <li><NavLink to={'/hr/home'}>Hr Home</NavLink></li>
                <li><NavLink to={'/hr/add'}>Add an Asset</NavLink></li>
                <li><NavLink to={'/hr/all'}>All Request</NavLink></li>
                <li><NavLink to={'/hr/custom'}>Custom Request</NavLink></li>
                <li><NavLink to={'/hr/myemployee'}>My Employee</NavLink></li>
                <li><NavLink to={'/hr/addemployee'}>Add an Employee</NavLink></li>
            </ul>
        </div>
    );
};

export default Navegaiton;
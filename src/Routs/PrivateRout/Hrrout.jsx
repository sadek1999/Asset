import { Navigate, useLocation } from "react-router-dom";
import UserAuth from "../../hooks/UserAuth/UserAuth";
import UseProfile from "../../hooks/Userinfo/UseProfile";


const Hrrout = ({children}) => {

    const {user,loding}=UserAuth()
    const [info]=UseProfile()
const location=useLocation()
    
    if(loding){
        return <progress className="progress w-56"></progress>
    }
    if(user && info[0]?.role==='hr'){
        return children ;
    }
    return <Navigate state={location.pathname} to={'/'}></Navigate>

};

export default Hrrout;
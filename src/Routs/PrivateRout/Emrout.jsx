import { Navigate, useLocation } from "react-router-dom";
import UserAuth from "../../hooks/UserAuth/UserAuth";
import UseProfile from "../../hooks/Userinfo/UseProfile";


const Emrout = ({ children }) => {
    const { user, loding } = UserAuth()
    const [info] = UseProfile()
    // const em =info[0].role==='employee'
    const location = useLocation()

    if (loding) {
        return <progress className="progress w-56"></progress>
    }
    if (user && info[0]?.role === 'employee') {
        return children;
    }
    return <Navigate state={location.pathname} to={'/'}></Navigate>

};

export default Emrout;
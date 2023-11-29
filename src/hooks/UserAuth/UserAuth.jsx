import { useContext } from "react";
import { AuthContext } from './../../Auth/AuthProvider/Authprovider';


const UserAuth = () => {
    const userauth=useContext(AuthContext)
    return userauth;
    
};

export default UserAuth;

import { FaGoogle } from "react-icons/fa";
import UserAuth from "../../hooks/UserAuth/UserAuth";
const Google = () => {
    const {googlelogin}=UserAuth();

    const handlgoogle=e=>{
        e.preventDefault();
    }
    return (
        <div className="mx-auto my-5">
            <div className="divider">OR</div>
            <div>
                <button onClick={handlgoogle} className="btn text-white btn-error">
                    <FaGoogle></FaGoogle> Google
                </button>
            </div>
        </div>
    );
};

export default Google;
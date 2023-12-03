import Usepanding from "../../../hooks/AllEmployee/UseAllreq";
import UseAllreq from "../../../hooks/AllEmployee/UseAllreq";


const Panding = () => {
    const [pending,refetch]=Usepanding()
    console.log(pending)

    return (
        <div>
            <h1 className="text-center text-3xl">My Request</h1>
        </div>
    );
};

export default Panding;
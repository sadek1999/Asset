
import UseTeam from "../../../../hooks/AllEmployee/UseTeam";
import { FaUsersLine } from "react-icons/fa6";
import useAxiosSequre from "../../../../hooks/axiosPublic/useAxiosSequre";


const MyEmaployee = () => {
    const [refetch, team] = UseTeam()
    const axiosSecure=useAxiosSequre()
   
   

    const handlremove=(id)=>{
        // e.preventDefault()
        console.log(id)
        axiosSecure.patch(`/employee/remove/${id}`)
        .then(res=>{
            console.log(res.data)
            refetch()
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <p>#</p>
                            </th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>email</th>
                            <th>Delet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            team?.map((p,index)=> <tr key={p._id}>

                                <th>
                                    <p>{index + 1}</p>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={p.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{p.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span className="">{p.email}</span>
                                </td>
                                <td><FaUsersLine /></td>
                                <th>
                                    <button onClick={()=>{handlremove(p._id)}} className="btn btn-error btn-xs">Remove</button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}


                </table>
            </div>

        </div>
    );
};

export default MyEmaployee;
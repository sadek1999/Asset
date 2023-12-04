import Swal from "sweetalert2";
import Usepanding from "../../../hooks/AllEmployee/UseAllreq";
import useAxiosSequre from './../../../hooks/axiosPublic/useAxiosSequre';


const Pending = () => {
    const [pending, refetch] = Usepanding()
    const axiosSequre= useAxiosSequre()
    console.log(pending)

    const handlreject=(id)=>{
        console.log(id)
        axiosSequre.put(`/request/${id}`,{do:'reject'})
        .then(res=>{
            console.log(res.data)
            if(res.data.acknowledged){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
            
        })

    }

    const handlApproved=( id,quantity,pid)=>{
        console.log(id, quantity)

        
        axiosSequre.put(`/request/${id}`,{do:'approved'})
        .then(res=>{
            console.log(res.data)
            if(res.data.acknowledged){
                axiosSequre.put(`/asset/${pid}`,{amout:quantity})
                .then(res=>{
                    if(res.data.acknowledged){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1000
                          });
                          refetch()
                    }
                })

                refetch()
            }
        })
    }
    return (
        <div>
            <h1 className="text-3xl text-center"> ---------All Requests----------</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Asset Name</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pending?.map((req,index)=> <tr key={req._id}>
                                <th>
                                    <p>{index+1}</p>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={req.reqphoto} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{req.reqname}</div>
                                            <div className="text-sm opacity-50">{req.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   <p className="text-xl">{req.name}</p>
                                </td>
                                <td className="text-xl">{req.quantity}</td>
                                <th>
                                    <button onClick={()=>{handlApproved(req._id,req.quantity,req.proid)}} className="btn bg-green-400 btn-xs">Approved</button>
                                </th>
                                <th>
                                    <button onClick={()=>{handlreject(req._id)}} className="btn bg-red-400 btn-xs">Reject</button>
                                </th>
                            </tr>)}



                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Pending;
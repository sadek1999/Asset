import Usepanding from "../../../hooks/AllEmployee/UseAllreq";
import UseAllreq from "../../../hooks/AllEmployee/UseAllreq";
import UseMyreq from "../../../hooks/AllEmployee/UseMyreq";


const Panding = () => {
    const [myreq, refetch] = UseMyreq()
    console.log('myreq', myreq)

    return (
        <div>
            <h1 className="text-center text-3xl">My Request</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                   #
                                </th>
                                <th> Asset Name</th>
                                <th> quantity</th>
                                <th>status</th>
                                <th>cancel</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {myreq?.map((req,index)=><tr key={req._id}>
                                <th>
                                   {index+1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                       
                                       
                                            <div className="font-bold">{req.name}</div>
                                            
                                        
                                    </div>
                                </td>
                                <td>
                                    <p>{req.quantity} pice</p>
                                </td>
                                <td>
                                    <div>{req.state==='pending'?<p className=" text-orange-300 text-xl">{req.state}</p>:<p></p>}
                                    {req.state==='approved'?<p className=" text-green-500 text-xl">{req.state}</p>:<p></p>}
                                    {req.state==='reject'?<p className=" text-red-500 text-xl">{req.state}</p>:<p></p>}

                                    {}
                                    </div>
                                </td>

                                <th>
                                    {req.type=='returnable'?<button className="btn bg-green-300 btn-xs">Return</button>:<button></button>}
                                    
                                </th>
                            </tr>)}
                            
                           
                            
                        </tbody>
                       

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Panding;
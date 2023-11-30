import { useEffect, useState } from "react";
import useAxiosSequre from "../../../../hooks/axiosPublic/useAxiosSequre";
import UseProfile from "../../../../hooks/Userinfo/UseProfile";
import Empollytabil from "../../../../Components/Tabils/Empollytabil";
import UseAllemp from "../../../../hooks/AllEmployee/UseAllemp";
import Swal from "sweetalert2";
import { MdRememberMe } from "react-icons/md";


const Addemployee = () => {
    const [products, setproducts] = useState(null)
    // 

    const [info] = UseProfile()
    const [employees,refetch] = UseAllemp()
    


    const axiosSequre = useAxiosSequre()

    useEffect(() => {
        axiosSequre.get('/asset')
            .then(res => {
                setproducts(res.data);
            })
    }, [])

   
    // console.log(employees.hr)
    let totalQuantity = null;
    if (products) {
        totalQuantity = products.reduce((total, product) => total + product.quantity, 0);

    }
    const handalAdd = (id) => {
        console.log(id)
        axiosSequre.patch(`/employee/${id}`)
        .then(res=>{
            if(res){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  axiosSequre.patch("")
                  refetch()
            }
            
        })
    }
    console.log(employees)
    console.log(employees?.haired )


    return (
        <div>

            <div className="card w-96 bg-base-100 text-center shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl">Pakage Limit : <span className="text-red-400 font-bold">{info[0]?.employee}</span> person </h2>
                    <p>Total products :{totalQuantity}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline btn-info">increase limit</button>
                    </div>
                </div>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>delet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees?.map(employee => <tr key={employee._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={employee.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{employee.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>

                                        <span className="badge badge-ghost badge-sm">{employee.email}</span>
                                    </td>
                                    <td>{employee?.haired && <MdRememberMe />}</td>
                                    <th>
                                        <p>{employee?.haired}</p>
                                        {employee?.haired?<p>Haired</p>:
                                        <button onClick={() => { handalAdd(employee._id) }} className="btn btn-ghost btn-xs">Add Team</button>

                                        }
                                        
                                    </th>
                                </tr>
                                )
                            }



                        </tbody>



                    </table>
                </div>

            </div>
        </div>
    );
};

export default Addemployee;
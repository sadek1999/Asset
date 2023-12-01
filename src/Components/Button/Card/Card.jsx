import Swal from "sweetalert2";
import useAxiosSequre from "../../../hooks/axiosPublic/useAxiosSequre";


const Card = ({ item }) => {
    const axiosSecure = useAxiosSequre()
    const { name, photo, quantity, type,_id } = item;

    // console.log( typeof(quantity))
    const handldelet = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete ${name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/asset/${id}`)
                    .then(res => { 
                        Swal.fire({
                            title: `Deleted ${name}`,
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        
                    })
                
            }
        });


    }
    return (

        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure ><img className="h-24 w-40" src={photo} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-3xl">{name}</h2>
                <p className="text-xl">quantity = <span className="font-bold">{quantity}</span> </p>
                <p className="text-xl"><span className="font-bold ">{type}</span></p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-info">Update</button>
                    <button onClick={()=>{handldelet(_id)}} className="btn btn-outline btn-error">Delete</button>
                </div>
            </div>
        </div>

    );
};

export default Card;
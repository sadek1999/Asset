import { useForm } from "react-hook-form";
import useAxiosPublc from "../../../../hooks/axiosPublic/useAxiosPublc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Addasset = () => {

    const axiospublic = useAxiosPublc()
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        // console.log(data)
        const q= parseFloat(data.quantity)
        const asset={
            name:data.name,
            type:data.type,
            quantity:q,
            photo:data.photo,
        }


        axiospublic.post("/asset", asset)
            .then(res => {
                console.log(res.data)

                toast.success('Successfully add !', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
             data.reset()
            })

    }
    return (
        <div>

            <div className="hero min-h-screen p-10 bg-base-200">


                <div className=" w-2/3 card shrink-0 mt-5 shadow-2xl bg-base-100">
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <h1 className="text-4xl font-bold text-center">Add asset </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name of Asset</span>
                            </label>
                            <input type="text" name='name' {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text"  {...register("photo", { required: true })} placeholder="url" className="input input-bordered" />
                            {errors.name && <span>url is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name='quantity' {...register("quantity", { required: true })} placeholder="quantity" className="input input-bordered" />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Asset Type</span>
                            </label>

                            <select className="p-3 rounded-md" {...register("type")}>
                                <option value="returnable">Returnable</option>
                                <option value="unreturnable">Unreturnable</option>

                            </select>
                        </div>


                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Add " />
                        </div>
                    </form>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>
    );
};

export default Addasset;
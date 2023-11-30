import { useForm } from "react-hook-form";
import useAxiosPublc from "../../../hooks/axiosPublic/useAxiosPublc";
import Swal from "sweetalert2";



const Emplay = () => {
const axiospublic=useAxiosPublc()
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const onSubmit = (data) =>{ 
        console.log(data)
        const userinfo = {
            name: data.name,
            email: data.email,
            photo:data.photo,
            company:data.company,
            role:'employee',
            hr:'',
            haired:"false",
        }
    
    axiospublic.post("/employee",userinfo)
    .then(res=>{
        console.log(res.data)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully join as Employee",
            showConfirmButton: false,
            timer: 1000
          });
          data.reset()
    })
    
    }

       

    return (
        <div>

            <div className="hero min-h-screen p-10 bg-base-200">
                
                    
                    <div className=" w-2/3 card shrink-0 mt-5 shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Join As Employee</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company name</span>
                                </label>
                                <input type="text" name='company' {...register("company", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
                                    })}
                                    placeholder="password" name='password' className="input input-bordered" />

                                {errors.password?.type == "required " && <span className="text-red-500 mt-2">password is required</span>}
                                {errors.password?.type == "minLength" && <span className="text-red-500 mt-2"> min length mast 6</span>}
                                {errors.password?.type == "maxLength" && <span className="text-red-500 mt-2">Max length 20</span>}

                                {errors.password?.type == "pattern" && <span className="text-red-500 mt-2">Must have one capetal letter one small letter and one spacial caracter</span>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Sing up" />
                            </div>
                        </form>
                    </div>
                
            </div>
        </div>
    );
};

export default Emplay;
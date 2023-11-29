import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublc from "../../../hooks/axiosPublic/useAxiosPublc";

import UserAuth from "../../../hooks/UserAuth/UserAuth";



const Hr = () => {
    const {singup}=UserAuth()
    const axiospublic=useAxiosPublc()
    const navigate=useNavigate()

   

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const info={
            name:data.name,
            email:data.email,
            photo:data.photo,
            company:data.companyname,
            plan:data.plan,
            barthDay:data.dateofBarth,
            

        }
        
       singup(data.email,data.password)
       .then(res=>{
       if(res){

        axiospublic.post('/user',info)
        .then(res=>{console.log(res.data)})
        navigate('/hr')
       }
       })
        
       
       
    }
    return (
        <div className=" pt-20">
            <div className="card flex-shrink-0  shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold text-center">
                    Join As an HR</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    {/* row-1 */}
                    <div className="flex gap-3 w-full">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text"  {...register("photo", { required: true })} placeholder="url" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">url is required</span>}
                        </div>
                    </div>
                    {/*  row-2 */}
                    <div className="flex gap-3 w-full">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text"  {...register("companyname", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Logo url</span>
                            </label>
                            <input type="text"  {...register("logo", { required: true })} placeholder="url" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">url is required</span>}
                        </div>
                    </div>
                    {/*  row-3 */}
                    <div className="flex gap-3 w-full">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Date Of Barth</span>
                            </label>
                            <input type="date" name="daterofbarth" {...register("dateofBarth", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control w-1/2">

                        <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                            
                            {/* <input type="text"  {...register("logo", { required: true })} placeholder="url" className="input input-bordered" />
                            {errors.name && <span>url is required</span>} */}
                        </div>
                    </div>


                    {/* row-4 */}
                    <div className="w-full flex gap-3">
                       
                        <div className="form-control w-1/2">
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


                        <div className="form-control w-1/2">
                        <label className="label">
                                <span className="label-text">Select your plan</span>
                            </label>
                           
                            <select className="p-3 rounded-md" {...register("plan")}>
                                <option value="plan-1">Plan-1</option>
                                <option value="plan-2">Plan-2</option>
                                <option value="plan-3">Plan-3</option>
                            </select> 
                        </div>
                    </div>


                 
    

                    <div className="form-control mt-6">

                        <input className="btn btn-primary" type="submit" value="Sing up" />
                    </div>
                </form>
                <p>have an acount? <Link to={'/login'}> Long in</Link></p>

            </div>
            
        </div>
    );
};

export default Hr;
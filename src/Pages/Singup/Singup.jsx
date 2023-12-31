import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Singup = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const onSubmit = (data) =>{ 
        console.log(data)}

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                   
                    <div className="card  shadow-2xl bg-base-100">
                        
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-96">
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

                        <h1>Are you new? <Link className="text-blue-500 my-4 mx-auto" to={'/singup'}> Sing up</Link></h1>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Singup;
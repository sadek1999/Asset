import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Google from "../../Components/Button/Google";
import UserAuth from "../../hooks/UserAuth/UserAuth";
import useAxiosPublc from './../../hooks/axiosPublic/useAxiosPublc';
import Swal from "sweetalert2";


const Login = () => {

    const axiosPublic=useAxiosPublc()
    const {login}=UserAuth()
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const onSubmit = (data) =>{ 
        console.log(data)
        const email=data.email;
        
        login(data.email,data.password)
        .then(res=>{
            console.log(res)
            axiosPublic.get(`/employee?email=${email}`)
            .then(res => {
                console.log(res.data)
               

                // if (res.data[0].hr) {
                //     console.log('Hr ok')
                //     singup(email, password)
                //         .then(res => {
                //             console.log(res)
                //             Swal.fire({
                //                 position: "top-end",
                //                 icon: "success",
                //                 title: "Your work has been saved",
                //                 showConfirmButton: false,
                //                 timer: 1500
                //             });
                //             // navgait('/employee/home')
                //         })
                //         .catch(error => {
                //             console.log(error)
                //         })
                // }
               
            })
        })
    
    }

   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-1/2 p-10 max-w-md shadow-2xl bg-base-100">
                        <h1 className="text-center font-bold text-3xl uppercase">login now </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            
                            
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
                                <Google></Google>
                            </div>
                        </form>

                        <h1>Are you new? <Link className="text-blue-500 my-4 mx-auto" to={'/singup'}> Sing up</Link></h1>
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default Login;
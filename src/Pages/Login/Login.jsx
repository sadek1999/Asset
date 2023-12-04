import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../Components/Button/Google";
import UserAuth from "../../hooks/UserAuth/UserAuth";
import useAxiosPublc from './../../hooks/axiosPublic/useAxiosPublc';
import Swal from "sweetalert2";


const Login = () => {
    const navigate=useNavigate()

    const axiosPublic = useAxiosPublc()
    const { login } = UserAuth()
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const email = data.email;

        login(data.email, data.password)
            .then(res => {
                console.log(res)
                axiosPublic.get(`/employee?email=${email}`)
                    .then(res => {
                        // console.log(res?.data)

                        // console.log(res?.data[0].role)
                        const r=res?.data[0].role;
                        console.log(r)
                        if(r==='hr'){
                                  navigate('/hr/home')
                        }
                        if(r==='employee'){

                            navigate('/employee/home')
                        }
                      

                    })
            })

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 space-y-2 lg:text-left">
                     <h1 className="text-xl text-red-400"> Pleas give sum time navigate to home page if not work try again </h1>
                       <p>Hr email: <span className="text-xl font-bold">khan@gmail.com</span>  and password :<span className="text-xl font-bold">123456Kk</span></p>


                       {/* <p>employee email: <span className="text-xl font-bold">robi@gmail.com</span>  and password :<span className="text-xl font-bold">123456Rr</span></p> */}

                       <p>employee email: <span className="text-xl font-bold">sadek@gmail.com</span>  and password :<span className="text-xl font-bold">123456Ss</span></p>
                       <p>employee email: <span className="text-xl font-bold">ali@gmail.com</span>  and password :<span className="text-xl font-bold">123456Aa</span></p>


                       
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
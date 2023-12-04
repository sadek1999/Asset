import axios from "axios";

const axiosPublic=axios.create({
    // baseURL:"http://localhost:8080"
    baseURL:"https://asset-server-kappa.vercel.app"
    // 
})

const useAxiosPublc = () => {
    return axiosPublic ;
};

export default useAxiosPublc;
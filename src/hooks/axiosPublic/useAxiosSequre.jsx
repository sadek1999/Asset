import axios from "axios";


const axiosSequre=axios.create({
    // baseURL:"http://localhost:8080"
    baseURL:"https://asset-server-kappa.vercel.app"
})

const useAxiosSequre = () => {
    return axiosSequre;
};

export default useAxiosSequre;
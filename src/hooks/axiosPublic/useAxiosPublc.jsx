import axios from "axios";

const axiosPublic=axios.create({
    baseURL:"http://localhost:8080"
})

const useAxiosPublc = () => {
    return axiosPublic ;
};

export default useAxiosPublc;
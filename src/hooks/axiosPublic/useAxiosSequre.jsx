import axios from "axios";


const axiosSequre=axios.create({
    baseURL:"http://localhost:8080/"
})

const useAxiosSequre = () => {
    return axiosSequre;
};

export default useAxiosSequre;
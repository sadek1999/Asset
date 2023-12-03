import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../axiosPublic/useAxiosSequre";


const UseReject = () => {
    const axiosSecure=useAxiosSequre()
    
    
       const {refetch,data :reject=[]}=useQuery({
        queryKey: ['req'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/request?state=reject`)
           
            return res.data;
        }
       })
    
       return [reject ,refetch]
};

export default UseReject;
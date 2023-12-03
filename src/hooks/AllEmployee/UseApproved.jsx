import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../axiosPublic/useAxiosSequre";


const UseApproved = () => {
    const axiosSecure=useAxiosSequre()
    
    
    
   
    
       const {refetch,data :approved=[]}=useQuery({
        queryKey: ['req'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/request?state=approved`)
           
            return res.data;
        }
       })
    
       return [approved ,refetch]
};

export default UseApproved;
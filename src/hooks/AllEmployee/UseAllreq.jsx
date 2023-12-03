import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../axiosPublic/useAxiosSequre";


const Usepanding= () => {
    const axiosSecure=useAxiosSequre()
    
    
    
   
    
       const {refetch,data :pending=[]}=useQuery({
        queryKey: ['req'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/request?state=pending`)
           
            return res.data;
        }
       })
    
       return [pending ,refetch]
};

export default Usepanding;
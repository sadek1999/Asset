import { useQuery } from "@tanstack/react-query";

import useAxiosSequre from "../axiosPublic/useAxiosSequre";


const UseTeam = () => {
   
    const axiosSecure=useAxiosSequre()
   const a=true

    const {refetch,data :team=[]}=useQuery({
        queryKey: ['employee'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/employee?haired=${a}`)
            
           
            return res.data;
        }
       })
    return [refetch,team]
};

export default UseTeam;
import { useQuery } from "@tanstack/react-query";

import useAxiosSequre from "../axiosPublic/useAxiosSequre";



const UseAllemp = () => {
  
   
    const axiosSecure=useAxiosSequre()
    
    
//     const c=info[0]?.company;
//     // console.log(info)

   const {refetch,data :employees=[]}=useQuery({
    queryKey: ['employee'],
    queryFn:async()=>{
        const res=await axiosSecure.get('/employee')
        // const res= await axiosSecure.get(`/employee`)
       
        return res.data;
    }
   })
// console.log(employee)
   return [employees ,refetch]
};

export default UseAllemp;
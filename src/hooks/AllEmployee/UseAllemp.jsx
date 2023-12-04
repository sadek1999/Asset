import { useQuery } from "@tanstack/react-query";

import useAxiosSequre from "../axiosPublic/useAxiosSequre";
import UseProfile from './../Userinfo/UseProfile';



const UseAllemp = () => {
  
   
    const axiosSecure=useAxiosSequre()
    const [info]=UseProfile()
    
    const c=info[0]?.company;
//     // console.log(info)
 const a='employee'

   const {refetch,data :employees=[]}=useQuery({
    queryKey: ['employee'],
    queryFn:async()=>{
        const res=await axiosSecure.get(`/employee?role=${a}&company=${c}`)
        // const res= await axiosSecure.get(`/employee`)
       
        return res.data;
    }
   })
// console.log(employee)
   return [employees ,refetch]
};

export default UseAllemp;
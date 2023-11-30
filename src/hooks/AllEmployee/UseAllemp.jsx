import { useQuery } from "@tanstack/react-query";
import UserAuth from "../UserAuth/UserAuth";
import useAxiosSequre from "../axiosPublic/useAxiosSequre";
import UseProfile from "../Userinfo/UseProfile";


const UseAllemp = () => {
  
    const {user}=UserAuth()
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
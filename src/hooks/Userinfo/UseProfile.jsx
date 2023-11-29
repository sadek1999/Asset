import { useQuery } from "@tanstack/react-query";
import UserAuth from "../UserAuth/UserAuth";
import useAxiosSequre from "../axiosPublic/useAxiosSequre";


const UseProfile = () => {

    const {user}=UserAuth()
    const axiosSecure=useAxiosSequre()

   const {refetch,data :info=[]}=useQuery({
    queryKey: ['card',user?.email],
    queryFn:async()=>{
        const res= await axiosSecure.get(`/user?email=${user.email}`)
       
        return res.data;
    }
   })

   return [info ,refetch]
   
};

export default UseProfile;
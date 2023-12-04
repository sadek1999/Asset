
import useAxiosSequre from '../axiosPublic/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import UseProfile from '../Userinfo/UseProfile';

const UseMyreq = () => {
    const axiosSecure=useAxiosSequre()
    const [info]=UseProfile()
 
    const {refetch,data :myreq=[]}=useQuery({
     queryKey: ['req'],
     queryFn:async()=>{
         const res=await axiosSecure.get(`/request?email=${info[0].email}`)
        
         return res.data;
     }
    })
 
    return [myreq ,refetch]
};

export default UseMyreq;
import React from 'react';
import useAxiosSequre from '../axiosPublic/useAxiosSequre';
import UseProfile from '../Userinfo/UseProfile';
import { useQuery } from '@tanstack/react-query';

const UseMyteam = () => {
      
    const axiosSecure=useAxiosSequre()
    const [info]=UseProfile()
    
    const c=info[0]?.company;
//     // console.log(info)
 const a=info[0].hr

   const {refetch,data :myteam=[]}=useQuery({
    queryKey: ['team'],
    queryFn:async()=>{
        const res=await axiosSecure.get(`/employee?hr=${a}`)
        // const res= await axiosSecure.get(`/employee`)
       
        return res.data;
    }
   })
// console.log(employee)
   return [myteam ,refetch]
};

export default UseMyteam;
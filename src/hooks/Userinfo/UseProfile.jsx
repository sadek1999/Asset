import { useQuery } from "@tanstack/react-query";
import UserAuth from "../UserAuth/UserAuth";
import useAxiosSequre from "../axiosPublic/useAxiosSequre";


const UseProfile = () => {

    const { user } = UserAuth()
    const axiosSecure = useAxiosSequre()
    console.log(user?.email)
    const email = user?.email;
    const { refetch, data: info = [] } = useQuery({
        queryKey: ['card', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/employee?email=${email}`)

            return res.data;
        }
    })
    console.log(info)
    return [info, refetch]


};

export default UseProfile;
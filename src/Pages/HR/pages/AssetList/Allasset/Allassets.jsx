import { useEffect, useState } from "react";
import useAxiosSequre from './../../../../../hooks/axiosPublic/useAxiosSequre';

import Card from "../../../../../Components/Button/Card/Card";
import { useForm } from "react-hook-form";


const Allassets = () => {

    const [asset, setasset] = useState();
    const axiosSequre = useAxiosSequre()


    const {
        register,
        handleSubmit,

       
    } = useForm()
    const onSubmit = (data) => {
        // console.log(data)
        axiosSequre.get(`/asset?type=${data.type}`)
            .then(res => {
                setasset('')
                setasset(res.data)
            })
    }
    const handlsearch=e=>{
        e.preventDefault()
        
        const name=e.target.name.value;
        axiosSequre.get(`/asset?name=${name}`)
        .then(res => {
            setasset('')
            setasset(res.data)
        })
    
    }

    useEffect(() => {
        axiosSequre.get('/asset')
            .then(res => {

                setasset(res.data)
            })
    }, [])


    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <form onSubmit={handlsearch} className="flex p-4  items-center gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Search by item name</span>
                                
                            </div>
                            <input type="text" name="name" placeholder="Item name" className="input input-bordered w-full max-w-xs" />
                            <div className="label">
                                
                            </div>
                        </label>
                        <div>
                            <input className="btn btn-outline btn-info mt-7" type="submit" value="search" />
                        </div>

                    </form>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex p-4 justify-center items-center gap-3">
                        <div className="form-control w-36">
                            <label className="label">
                                <span className="label-text">filter by type</span>
                            </label>

                            <select className=" rounded-md select select-bordered " {...register("type")}>
                                <option value="returnable">returnable</option>
                                <option value="unreturnable">unreturnable</option>

                            </select>
                        </div>
                        <div>
                            <input className="btn btn-outline btn-info mt-7" type="submit" value="filter" />
                        </div>

                    </form>
                </div>
            </div>



            <div className="grid grid-cols-4 gap-3">
                {
                    asset?.map(item => <Card key={item._id} item={item}></Card>)
                }

            </div>
        </div>

    );
};

export default Allassets;
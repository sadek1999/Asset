import { useEffect, useState } from "react";
import useAxiosSequre from './../../../../../hooks/axiosPublic/useAxiosSequre';
import axios from "axios";
import Card from "../../../../../Components/Button/Card/Card";


const Allassets = () => {

    const [asset, setasset] = useState();
    const axiosSequre = useAxiosSequre()

    useEffect(() => {
        axiosSequre.get('/asset')
            .then(res => {

                setasset(res.data)
            })
    }, [])
    return (
        <div>
            
            <div className="grid grid-cols-4 gap-3">
                {
                    asset?.map(item => <Card key={item._id} item={item}></Card>)
                }

            </div>
        </div>

    );
};

export default Allassets;
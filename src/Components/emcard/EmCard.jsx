
import Swal from 'sweetalert2';
import useAxiosSequre from '../../hooks/axiosPublic/useAxiosSequre';

import UseProfile from '../../hooks/Userinfo/UseProfile';
import { useState } from 'react';

import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";




const EmCard = ({item}) => {
    const [info]=UseProfile()
    const axiosSecure = useAxiosSequre()

    
    const [startDate, setStartDate] = useState(new Date());

// console.log(date)

    const { name, photo, quantity, type,_id } = item;

    
    const handleSubmit=(e)=>{
        
        e.preventDefault();
        const q= parseFloat(e.target.quantity.value);
        
        e.target.reset()
        
        const email=info[0].email;
        const reqname=info[0].name;
        const reqphoto=info[0].photo;
        const prod={
            reqname,
            reqphoto,
            proid:_id,
            email: email,
            name:name,
            photo:photo,
            type:type,
            quantity:q,
            date:startDate,
            state:'pending'
        }

        axiosSecure.post(`/request`,prod)
        .then(res=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 700
              });
        })

        console.log(prod)
        // console.log(item)
        

    }

    // console.log( typeof(quantity))
    const handldelet = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete ${name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/asset/${id}`)
                    .then(res => { 
                        Swal.fire({
                            title: `Deleted ${name}`,
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        
                    })
                
            }
        });

    }

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
           
        <figure ><img className="h-24 w-40" src={photo} alt="Shoes" /></figure>
        <div className="card-body text-center">
            <h2 className="text-3xl">{name}</h2>
            <p className="text-xl">
            <span className="font-bold">{quantity >=0? <span>Availibility = {quantity}</span>:<p className='text-red-600'>Out of Stock</p>}
            </span> </p>
            <p className="text-xl"><span className="font-bold ">{type}</span></p>
            <div className="card-actions justify-center">
                <form onSubmit={handleSubmit} className='space-y-2' action="">
                <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name='quantity'  placeholder="how many you need" required className=" w-40 border-spacing-3" />
                            
                        </div>

                        <input type="submit" className="btn btn-outline btn-info" value="Request" />
                </form>
                
               
            </div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    </div>

    );
};

export default EmCard;
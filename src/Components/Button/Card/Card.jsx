

const Card = ({item}) => {
    const {name,photo,quantity,type}=item;
    // console.log( typeof(quantity))
    return (

        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure ><img className="h-24 w-40" src={photo} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-3xl">{name}</h2>
                <p className="text-xl">quantity = <span className="font-bold">{quantity}</span> </p>
                <p className="text-xl">Type= <span className="font-bold ">{type}</span></p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline btn-info">Update</button>
                <button className="btn btn-outline btn-error">Delete</button>
                </div>
            </div>
        </div>

    );
};

export default Card;
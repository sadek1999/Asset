

const Pakages = () => {
    return (
        <div>
            <h1 className='text-4xl'>this is the pakages pages </h1>
            <div className=" flex   flex-col md:flex-row gap-5">
                {/* Plan-1 */}
                <div className=" rounded-md w-full text-center space-y-2 bg-blue-400 shadow-xl text-white">


                    <h2 className="text-2xl uppercase bg-black bg-opacity-30 text-center font-bold p-3 ">Plan 1</h2>

                    <div className="space-y-3 p-4">
                    <p className="text-6xl font-bold"> $5.00 <span className="text-xl">/ year</span> </p>
                    <p className="text-xl font-semibold">Fro 5 members</p>
                    <div className="card-actions justify-center">
                        <button className="btn py-2 px-1 w-2/3  bg-white text-black">Buy Now</button>

                    </div>
                    </div>
                   
                </div>
                {/* Plan-2 */}
                <div className=" rounded-md w-full text-center space-y-2 bg-blue-400 shadow-xl text-white">


                    <h2 className="text-2xl uppercase bg-black bg-opacity-30 text-center font-bold p-3 ">Plan 2</h2>

                    <div className="space-y-3 p-4">
                    <p className="text-6xl font-bold"> $8.00 <span className="text-xl">/ year</span> </p>
                    <p className="text-xl font-semibold">Fro 10 members</p>
                    <div className="card-actions justify-center">
                        <button className="btn py-2 px-1 w-2/3  bg-white text-black">Buy Now</button>

                    </div>
                    </div>
                    
                </div>
                {/* Plan-1 */}
                <div className=" rounded-md w-full  text-center space-y-2 bg-blue-400 shadow-xl text-white">
                <h2 className="text-2xl p-3 rounded-t-md uppercase bg-black bg-opacity-30 text-center font-bold ">Plan 1</h2>

                    <div className="space-y-3 p-4">
                       
                        <p className="text-6xl font-bold"> $15.00 <span className="text-xl">/ year</span> </p>
                        <p className="text-xl font-semibold">Fro 15 members</p>
                        <div className="card-actions justify-center">
                            <button className="btn py-2 px-1 w-2/3  bg-white text-black">Buy Now</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pakages;
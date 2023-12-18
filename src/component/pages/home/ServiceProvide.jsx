

const ServiceProvide = () => {
    return (
        <div>
            <div className="py-12">
                <div className="grid items-center md:grid-cols-2 px-12">
                    <div>
                        <h1 className="text-5xl leading-tight pb-8 font-bold">What <span className="text-[#12D1E5]">Service</span> We Provide</h1>
                        <h1 className="text-2xl font-bold pb-2"><span className="text-[#12D1E5]">01.</span> Travel Plan</h1>
                        <p className="pb-5">Travel plans are not really on instrument themsclves but a delivery <br /> meehansism or strategy for other mostly.</p>

                        <h1 className="text-2xl font-bold pb-2"><span className="text-[#12D1E5]">02.</span>  Flights Booking</h1>
                        <p className="pb-5">Discovery your next dream destination. find deals on domestoc <br /> and international flights.</p>

                        <h1 className="text-2xl font-bold pb-2"><span className="text-[#12D1E5]">03.</span>  Accommodation</h1>
                        <p className="">Lodging, food and services or travelling space and related services <br /> usually used in plural</p>
                        <button className="btn mt-8 w-[200px] bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... ">Expolore More</button>
                    </div>
                    <img src="https://i.ibb.co/zSN671p/Group-19.png" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default ServiceProvide;
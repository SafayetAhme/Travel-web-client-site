import { Link } from "react-router-dom";


const ServiceProvide = () => {
    return (
        <div>
            <div className=" text-center">
                <Link to="/tours">
                    <button className=" px-10 py-3 bg-[#12d0e5bb] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                        {/* purple box */}
                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                            View All
                        </span>
                    </button>
                </Link>
            </div>
            <div className="py-12">
                <div className="grid items-center gap-12 md:gap-0 md:grid-cols-2 px-12">
                    <div>
                        <h1 className="text-5xl leading-tight pb-8 font-bold">What <span className="text-[#12D1E5]">Service</span> We Provide</h1>
                        <h1 className="text-2xl font-bold pb-2"><span className="text-[#12D1E5]">01.</span> Travel Plan</h1>
                        <p className="pb-5">Travel plans are not really on instrument themsclves but a delivery <br /> meehansism or strategy for other mostly.</p>

                        <h1 className="text-2xl font-bold pb-2"><span className="text-[#12D1E5]">02.</span>  Flights Booking</h1>
                        <p className="pb-5">Discovery your next dream destination. find deals on domestoc <br /> and international flights.</p>

                        <h1 className="text-2xl font-bold pb-2"><span className="text-[#12D1E5]">03.</span>  Accommodation</h1>
                        <p className="">Lodging, food and services or travelling space and related services <br /> usually used in plural</p>
                        <button className=" px-12 mt-6 py-3 bg-[#12d0e5bb] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                Expolore More
                            </span>
                        </button>
                    </div>
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                        <img src="https://i.ibb.co/zSN671p/Group-19.png" className="w-full transition duration-300 ease-in-out hover:scale-110 " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceProvide;
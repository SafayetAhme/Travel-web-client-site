

const Seetmemories = () => {
    return (
        <div>
            <div className="pb-16 pt-4">
                <div className="hero-content grid md:grid-cols-2">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                        <img src="https://i.ibb.co/yVL2NRn/Group-7.png" className=" md:pl-12 transition duration-300 ease-in-out hover:scale-110" />
                    </div>
                    <div className="md:pr-12">
                        <h1 className="text-5xl font-bold">Sweet <span className="text-[#2BC1C7]">memories</span> come to life again</h1>
                        <p className=" relative group">
                            <p className="mt-6 hover:pt-3 pb-2 text-[#3b3d41] hover:text-white hover:px-2 font-normal">Using our collection, you will be able to travel to the best place. Our goal is to provide you with the best service possible. You will be able to explore the best places in this world with our help.</p>
                            <span className="absolute left-0 -bottom-1 w-full h-0 rounded-md  bg-[#12D1E5] -z-10 group-hover:h-full group-hover:transition-all"></span>
                        </p>
                        <div className="flex items-end gap-12">
                            <div className="">
                                <img className="-ml-5" src="https://i.ibb.co/m8bZ09f/Group-14.png" alt="" />
                                <h1 className="text-xl -mt-3 leading-6 text-[#727778] font-normal">Years <br /> experience</h1>
                            </div>
                            <div className="">
                                <img className="-ml-5" src="https://i.ibb.co/VWJ0zkR/Group-15.png" alt="" />
                                <h1 className="text-xl -mt-5 leading-6 text-[#727778] font-normal">Destination<br />collaboration</h1>
                            </div>
                            <div className="">
                                <img className="-ml-5" src="https://i.ibb.co/hFysY53/Group-16.png" alt="" />
                                <h1 className="text-xl -mt-5 leading-6 text-[#727778] font-normal">Happy<br />Customer</h1>
                            </div>
                        </div>
                        <button className=" mt-8 px-8 py-3 bg-[#12D1E5] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                Expolore More
                            </span>
                        </button>
                    </div>
                </div>
                <div className="md:flex justify-between">
                    <svg class="animate-bounce  bg-gradient-to-r from-cyan-400 to-[#0b83f3d1]  rounded-sm w-8 h-8 ...">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20L12 4" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </svg>
                    <svg class="animate-bounce  bg-gradient-to-r from-cyan-400 to-[#0bf3c8d1]   rounded-sm w-8 h-8 ...">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20L12 4" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Seetmemories;
import { Link } from "react-router-dom";


const ContactUs = () => {
    return (
        <div>
            <div className="py-12">
                <div className="grid gap-12 items-center md:grid-cols-2 px-12">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                        <img src="https://i.ibb.co/vY0gYk6/Group-26.png" className="w-full transition duration-300 ease-in-out hover:scale-110 " />
                    </div>
                    <div>
                        <h1 className="text-6xl  pb-6 font-bold">Life is short <br /> and the <span className="text-[#12D1E5]">world</span> <br /> is wide</h1>
                        <p className="">It's just a matter of leaving and going wherever you want to go if <br /> you want to make the most of your adventure. Our team is eagerly anticipating your arrival</p>
                        <Link to="/contactus">
                            <div className="card-actions">
                                <button className=" w-fit px-10 mt-5 py-3 shadow-lg shadow-cyan-300/50 ...  bg-[#12d0e5bb] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                    {/* purple box */}
                                    <span className="w-0 h-0  rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full flex items-center gap-2 font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Contact Us
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 18L20 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M15 11.9995L4 11.9995" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12 16L15.2929 12.7071C15.6262 12.3738 15.7929 12.2071 15.7929 12C15.7929 11.7929 15.6262 11.6262 15.2929 11.2929L12 8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-between">
                <svg class="animate-bounce  bg-gradient-to-r from-cyan-400 to-[#0b83f3d1]  rounded-sm w-8 h-8 ...">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20L12 4" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </svg>
                <svg class="animate-bounce  bg-gradient-to-r from-cyan-300 to-[#0bf3b9f1]   rounded-sm w-8 h-8 ...">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20L12 4" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </svg>
            </div>
        </div>
    );
};

export default ContactUs;
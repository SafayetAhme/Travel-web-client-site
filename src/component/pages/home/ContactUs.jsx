

const ContactUs = () => {
    return (
        <div>
            <div className="py-12">
                <div className="grid gap-12 items-center md:grid-cols-2 px-12">
                    <img src="https://i.ibb.co/vY0gYk6/Group-26.png" className="w-full" />
                    <div>
                        <h1 className="text-6xl  pb-6 font-bold">Life is short <br /> and the <span className="text-[#12D1E5]">world</span> <br /> is wide</h1>

                        <p className="">It's just a matter of leaving and going wherever you want to go if <br /> you want to make the most of your adventure. Our team is eagerly anticipating your arrival</p>
                        <button className="btn flex gap-2 mt-8 w-[180px] bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... ">Contact Us <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 18L20 6" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M15 11.9995L4 11.9995" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 16L15.2929 12.7071C15.6262 12.3738 15.7929 12.2071 15.7929 12C15.7929 11.7929 15.6262 11.6262 15.2929 11.2929L12 8" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
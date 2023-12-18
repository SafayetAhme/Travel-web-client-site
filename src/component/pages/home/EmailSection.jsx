

const EmailSection = () => {
    return (
        <div>
            <div className="py-20">
                <div className="hero-content gap-14 grid md:grid-cols-2">
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/0qjWXGD/Group-25.png)' }}>
                        <img src="https://i.ibb.co/s1y195D/Group-23.png" className="" />
                    </div>
                    <div>
                        <h1 className="font-medium text-gray-500 pb-1">SUPERCHARGE YOUR PLANNING POWERS</h1>
                        <h1 className="text-5xl font-bold text-[#071214]">Travel to make <br /> <span className="text-[#12D1E5]">memories</span> all <br />around the <span className="text-[#12D1E5]">world</span> </h1>
                        <p className="py-6 text-gray-600 font-normal">Stacks is a production-ready library of stackable content blocks <br /> built in React Native.</p>
                        <div className="flex items-center">
                            <input type="text" placeholder="Enter your email" className="input input-bordered bg-[#ecf0f0d5] border-none outline-none w-full max-w-xs" />
                            <div className=" bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  -ml-[44px] h-fit w-fit p-2  rounded-md">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 18L20 6" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M16 11.9995L4 11.9995" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 8C12 8 16 10.946 16 12C16 13.0541 12 16 12 16" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailSection;
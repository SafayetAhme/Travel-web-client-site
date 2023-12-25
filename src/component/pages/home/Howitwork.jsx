

const Howitwork = () => {
    return (
        <div className="justify-center text-center my-20">
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
            <h1 className="text-3xl font-bold pb-3">How it work</h1>
            <p className="text-[#4d5454]">Stacks is a production-ready library of stackable content <br /> blocks built in React Native.</p>

            <div className="pt-6 md:flex gap-6 text-center justify-center">
                <div className="flex gap-0 items-center">
                    <img src="https://i.ibb.co/9sHFjTf/Group-4-1.png" alt="" />
                    <div className="text-start">
                        <h1 className="text-xl pb-1 font-bold">Book & relaxd</h1>
                        <p className="text-[#4d5454e4]">We realize ideas from simple to <br /> complex, everything easy to use</p>
                    </div>
                </div>
                <div className="flex gap-0 items-center">
                    <img src="https://i.ibb.co/wwhCdKq/Group-5-1.png" alt="" />
                    <div className="text-start">
                        <h1 className="text-xl pb-1 font-bold">Save more</h1>
                        <p className="text-[#4d5454e4]">We realize ideas from simple to <br /> complex, everything easy to use</p>
                    </div>
                </div>
                <div className="flex gap-0 items-center">
                    <img src="https://i.ibb.co/jRLPRJV/Group-1-1.png" alt="" />
                    <div className="text-start">
                        <h1 className="text-xl pb-1 font-bold">Book & relaxd</h1>
                        <p className="text-[#4d5454e4]">We realize ideas from simple to <br /> complex, everything easy to use</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Howitwork;


const Hero = () => {
    return (
        <div>
            <div className="" style={{ backgroundImage: 'url(https://i.ibb.co/109QSMn/image-64.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-[700px] py-32">
                        <h1 className="mb-5 text-5xl text-white font-bold">Find out where you can enjoy your next vacation</h1>
                        <p className="mb-5">Would you like to discover a nature paradise anywhere in the world. Together, let's discover the best destinations in the world.</p>
                        <div>
                            <form>
                                <label for="default-search" className="mb-2 text-sm border-none outline-none font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative md:ml-[140px] mb-6 w-[420px]">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#141B34" stroke-width="1.5" />
                                            <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#141B34" stroke-width="1.5" />
                                        </svg>
                                    </div>
                                    <input type="search"  id="default-search" className="block w-full outline-none  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="find your destinations..." required />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5  bg-[#12D1E5] border-[#12D1E5] hover:bg-[#04e6ff] border-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  outline-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                </div>
                            </form>


                        </div>
                        <button className="btn bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... ">Expolore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
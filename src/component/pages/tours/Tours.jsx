import { Link } from "react-router-dom";

const Tours = () => {
    return (
        <div>
            <div className="hero mb-16" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/bf/46/9a/bf469ae026d5a9388c9877e788697ec8.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-12">
                        <h1 className="mb-5 text-4xl font-bold">Tour Package</h1>
                        <button className="bg-[#11bac3] px-6 py-2 rounded-lg"><Link to="/">Back to Home</Link></button>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="px-12">
                <div className="grid grid-cols-4 gap-12">
                    <div className="bg-slate-100 rounded-lg p-4 col-span-1">
                        <h1 className="text-xl font-bold">Search</h1>
                        <div className="flex pt-2 pb-8 items-center">
                            <input type="text" placeholder="Find your place" className="input border-2 border-gray-300 outline-none w-full max-w-xs" />
                            <svg className="-ml-9" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 17.5L22 22" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <div>
                            <h1 className="text-xl pb-2 font-bold">Filter By</h1>
                            <input type="range" min={0} max="100" value="40" className="range range-error" />
                            <div className="flex justify-between">
                                <h1 className="font-medium text-gray-500">$0.00</h1>
                                <h1 className="font-bold text-gray-950">$150.00</h1>
                            </div>
                        </div>

                        <div className="pt-5">
                            <h1 className="text-xl pb-2 font-bold">Categories</h1>
                            <div className="">
                                <div className="flex gap-2 pb-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>nodi</h1>
                                </div>
                                <div className="flex gap-2 pb-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>pahar</h1>
                                </div>
                                <div className="flex gap-2 pb-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>sagr</h1>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>kitta</h1>
                                </div>
                            </div>
                        </div>

                        <div className="pt-5">
                            <h1 className="text-xl pb-2 font-bold">Destinations</h1>
                            <div className="">
                                <div className="flex gap-2 pb-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>bangladehs</h1>
                                </div>
                                <div className="flex gap-2 pb-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>bangladehs</h1>
                                </div>
                                <div className="flex gap-2 pb-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>bangladehs</h1>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>bangladehs</h1>
                                </div>
                            </div>
                        </div>

                        <div className="pt-5">
                            <h1 className="text-xl pb-2 font-bold">Reviews</h1>
                            <div className="">
                                <div className="flex gap-2 pb-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>5 star</h1>
                                </div>
                                <div className="flex gap-2 pb-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>5 star</h1>
                                </div>
                                <div className="flex gap-2 pb-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>5 star</h1>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" checked />
                                    <h1>5 star</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className=" col-span-3 ...">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold">Place List <span className="text-emerald-500">(32)</span> </h1>
                            <div className="flex items-center gap-3">
                                <h1 className="font-medium">Short by</h1>
                                <div className="flex gap-2 items-center">
                                    <div className="border-2 p-1 hover:bg-[#11bac3] hover:border-[#11bac3] hover:stroke-slate-50 rounded-md">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 12L10 12" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                                            <path d="M20 5L4 5" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                                            <path d="M20 19L4 19" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="border-2 p-1  hover:bg-[#11bac3] hover:border-[#11bac3] hover:stroke-slate-50 rounded-md">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z" stroke="#141B34" stroke-width="1.5" />
                                            <path d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z" stroke="#141B34" stroke-width="1.5" />
                                            <path d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z" stroke="#141B34" stroke-width="1.5" />
                                            <path d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z" stroke="#141B34" stroke-width="1.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className="pt-4">
                            <div className="grid pb-12 pt-1 gap-6 w-full md:grid-cols-3">
                                <div className="card card-compact w-[275px] bg-base-100 shadow-xl">
                                    <figure><img className="h-[250px]" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <div className="flex justify-between">
                                            <h2 className="card-title">Place name</h2>
                                            <h2 className="card-title">ratting</h2>
                                        </div>
                                        <div className=" flex justify-between">
                                            <div className="flex items-center gap-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#141B34" stroke-width="1.5" />
                                                    <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#141B34" stroke-width="1.5" />
                                                </svg>
                                                <p>bangladesh</p>
                                            </div>
                                            <h1 className=" text-lg"> <span className="text-lg font-bold text-[#309ecd]">$12.00</span> /person</h1>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn w-full mt-4 bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... ">Expolore More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-compact w-[275px] bg-base-100 shadow-xl">
                                    <figure><img className="h-[250px]" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <div className="flex justify-between">
                                            <h2 className="card-title">Place name</h2>
                                            <h2 className="card-title">ratting</h2>
                                        </div>
                                        <div className=" flex justify-between">
                                            <div className="flex items-center gap-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#141B34" stroke-width="1.5" />
                                                    <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#141B34" stroke-width="1.5" />
                                                </svg>
                                                <p>bangladesh</p>
                                            </div>
                                            <h1 className=" text-lg"> <span className="text-lg font-bold text-[#309ecd]">$12.00</span> /person</h1>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn w-full mt-4 bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... ">Expolore More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-compact w-[275px] bg-base-100 shadow-xl">
                                    <figure><img className="h-[250px]" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <div className="flex justify-between">
                                            <h2 className="card-title">Place name</h2>
                                            <h2 className="card-title">ratting</h2>
                                        </div>
                                        <div className=" flex justify-between">
                                            <div className="flex items-center gap-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#141B34" stroke-width="1.5" />
                                                    <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#141B34" stroke-width="1.5" />
                                                </svg>
                                                <p>bangladesh</p>
                                            </div>
                                            <h1 className=" text-lg"> <span className="text-lg font-bold text-[#309ecd]">$12.00</span> /person</h1>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn w-full mt-4 bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... ">Expolore More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tours;
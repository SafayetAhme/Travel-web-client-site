import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div>
            <div className="hero mb-16" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/bf/46/9a/bf469ae026d5a9388c9877e788697ec8.jpg)' }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-12">
                        <h1 className="mb-5 text-white text-4xl font-bold">About Us</h1>
                        <button className="bg-[#12ced8] px-6 text-white py-2 rounded-lg"><Link to="/">Back to Home</Link></button>
                    </div>
                </div>
            </div>

            {/* 1 */}
            <div className="grid gap-12 md:grid-cols-2 px-12">
                <div>
                    <img src="https://i.ibb.co/rGrpRdd/Group-27.png" alt="" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold pb-10">Why <br /> <span className="text-[#11bac3]">should</span> you <span className="text-[#11bac3]">choose</span> us?</h1>
                    <div className="flex mb-4 gap-0 shadow-xl rounded-lg items-center">
                        <img className="w-32" src="https://i.ibb.co/Trdq8y2/Group-34.png" alt="" />
                        <div>
                            <h1 className="text-2xl font-bold pb-1">350,00 Place</h1>
                            <p>Stacks is a production-ready library of stack able content <br />blocks built in React Native</p>
                        </div>
                    </div>
                    <div className="flex mb-4 gap-0 shadow-xl rounded-lg items-center">
                        <img className="w-32" src="https://i.ibb.co/Y0cMxB8/Group-33.png" alt="" />
                        <div>
                            <h1 className="text-2xl font-bold pb-1">World Wide Tour Operators</h1>
                            <p>Stacks is a production-ready library of stack able content <br />blocks built in React Native</p>
                        </div>
                    </div>
                    <div className="flex mb-4 gap-0 shadow-xl rounded-lg items-center">
                        <img className="w-32" src="https://i.ibb.co/yQhmyzH/Group-35.png" alt="" />
                        <div>
                            <h1 className="text-2xl font-bold pb-1">All major Cruise Lines</h1>
                            <p>Stacks is a production-ready library of stack able content <br />blocks built in React Native</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className="grid gap-16 pt-24 md:grid-cols-2 items-center px-12">
                <div>
                    <h1 className="text-5xl font-bold pb-10">About <br /> <span className="text-[#11bac3]">Travel</span> & <span className="text-[#11bac3]">Tours</span></h1>
                    <div className="pb-8">
                        <div>
                            <p>There is a library of stackable content blocks called Stacks in React Native There is a library of stackable content blocks called Stacks in React Native library stackable content blocks called Stacks in React Native There is a library of stackable content blocks<br /> </p>
                            <p className="pt-6">There is a library of stackable content blocks called Stacks in React Native There is a library of stackable content blocks called Stacks in React Native library stackable content blocks called Stacks in React Native There is a library of stackable content blocks<br /> </p>
                        </div>
                    </div>
                    <div className="gap-4 flex">
                        <div className="">
                            <img className="w-32 -ml-5 -mb-8" src="https://i.ibb.co/xH2GGB0/Group-37.png" alt="" />
                            <h1 className="text-base text-gray-500  font-medium">Years Exp</h1>
                        </div>
                        <div className="">
                            <img className="w-32 -ml-5 -mb-8" src="https://i.ibb.co/VLwD5Yc/Group-38.png" alt="" />
                            <h1 className="text-base text-gray-500  font-medium">Top Hosts</h1>
                        </div>
                        <div className="">
                            <img className="w-32 -ml-5 -mb-8" src="https://i.ibb.co/6152yYt/Group-39.png" alt="" />
                            <h1 className="text-base text-gray-500  font-medium">Top Country</h1>
                        </div>
                        <div className="">
                            <img className="w-32 -ml-5 -mb-8" src="https://i.ibb.co/pvy54yt/Group-40.png" alt="" />
                            <h1 className="text-base text-gray-500  font-medium">Cities available</h1>
                        </div>
                    </div>

                </div>
                <div>
                    <img src="https://i.ibb.co/NNTJv5C/Group-42.png" alt="" />
                </div>
            </div>

            {/* 3 */}
            <div className="grid gap-14 pt-24 md:grid-cols-2 items-center px-12">
                <div>
                    <img src="https://i.ibb.co/grR75x4/Group-44.png" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl  font-medium pb-2">Save time, <span className="text-[#11bac3]">save money</span> </h1>
                    <h1 className="text-5xl font-bold pb-6">let's <span className="text-[#11bac3]">Get</span> & <span className="text-[#11bac3]">Started</span></h1>
                    <div className="pb-8">
                        <p>There is a library of stackable content blocks called Stacks in React Native There is a library of stackable content blocks called Stacks in React Native library stackable content blocks called Stacks in React Native There is a library of stackable content blocks<br /> </p>
                        <div>
                            <Link to="/">
                                <button className="btn mt-8 bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... ">Start your Search</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 */}
            <div className="grid pb-16 px-12 gap-12 items-center pt-16 md:grid-cols-2">
                <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="pb-20">
                                <h1 className="text-3xl font-bold">What Our <span className="text-[#12D1E5]">Customer's</span> <br />Say About Us</h1>
                                <p className="py-6">The package we chose and upgraded was worth the extra dollars. Usually not keen flying Jetstar, but this time the flights were flawless, flight times were good and checked baggage was included. Vouchers came quickly after purchasing our deal online.</p>
                                <div className=" flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <img className="w-[60px] h-[60px] rounded-full" src="https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg" alt="" />
                                        <div>
                                            <h1 className="text-xl font-medium">Safayet Ahmed</h1>
                                            <p>Ui UX Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex bottom-0 right-0 gap-2">
                                <a href="#slide4" className="btn hover:bg-[#12D1E5] hover:border-[#12D1E5] hover:text-white btn-circle">❮</a>
                                <a href="#slide2" className="btn  hover:bg-[#12D1E5] hover:border-[#12D1E5] hover:text-white btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className="pb-20">
                                <h1 className="text-3xl font-bold">What Our <span className="text-[#12D1E5]">Customer's</span> <br />Say About Us</h1>
                                <p className="py-6">The package we chose and upgraded was worth the extra dollars. Usually not keen flying Jetstar, but this time the flights were flawless, flight times were good and checked baggage was included. Vouchers came quickly after purchasing our deal online.</p>
                                <div className=" flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <img className="w-[60px] h-[60px] rounded-full" src="https://i.pinimg.com/564x/0b/77/77/0b7777ae8de596d4095567f23d0a8b33.jpg" alt="" />
                                        <div>
                                            <h1 className="text-xl font-medium">Rakibull Hasan</h1>
                                            <p>UX Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex bottom-0 right-0 gap-2">
                                <a href="#slide1" className="btn hover:bg-[#12D1E5] hover:border-[#12D1E5] hover:text-white btn-circle">❮</a>
                                <a href="#slide3" className="btn  hover:bg-[#12D1E5] hover:border-[#12D1E5] hover:text-white btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <div className="pb-20">
                                <h1 className="text-3xl font-bold">What Our <span className="text-[#12D1E5]">Customer's</span> <br />Say About Us</h1>
                                <p className="py-6">The package we chose and upgraded was worth the extra dollars. Usually not keen flying Jetstar, but this time the flights were flawless, flight times were good and checked baggage was included. Vouchers came quickly after purchasing our deal online.</p>
                                <div className=" flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <img className="w-[60px] h-[60px] rounded-full" src="https://i.pinimg.com/564x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg" alt="" />
                                        <div>
                                            <h1 className="text-xl font-medium">Rifat Ahmed</h1>
                                            <p>Web developer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex bottom-0 right-0 gap-2">
                                <a href="#slide2" className="btn hover:bg-[#12D1E5] hover:border-[#12D1E5] hover:text-white btn-circle">❮</a>
                                <a href="#slide4" className="btn  hover:bg-[#12D1E5] hover:border-[#12D1E5] hover:text-white btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <div className="pb-20">
                                <h1 className="text-3xl font-bold">What Our <span className="text-[#12D1E5]">Customer's</span> <br />Say About Us</h1>
                                <p className="py-6">The package we chose and upgraded was worth the extra dollars. Usually not keen flying Jetstar, but this time the flights were flawless, flight times were good and checked baggage was included. Vouchers came quickly after purchasing our deal online.</p>
                                <div className=" flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <img className="w-[60px] h-[60px] rounded-full" src="https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg" alt="" />
                                        <div>
                                            <h1 className="text-xl font-medium">Safayet Ahmed</h1>
                                            <p>Ui UX Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex bottom-0 right-0 gap-2">
                                <a href="#slide3" className="btn hover:bg-[#12D1E5] hover:border-[#12D1E5] hover:text-white btn-circle">❮</a>
                                <a href="#slide1" className="btn  hover:bg-[#12D1E5] hover:border-[#12D1E5] hover:text-white btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="rounded-xl" src="https://i.ibb.co/WfD7cCp/Group-20.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
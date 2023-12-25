

const Review = () => {
    return (
        <div>
            <div className="grid gap-12 items-center pt-28 md:grid-cols-2">
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
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                    <img className="rounded-xl transition duration-300 ease-in-out hover:scale-110" src="https://i.ibb.co/WfD7cCp/Group-20.png" alt="" />
                </div>
            </div>
            <div className="md:flex pt-12 justify-between">
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

export default Review;
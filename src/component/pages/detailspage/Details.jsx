import { Rating } from "@mui/material";
import { Link, useLoaderData, useParams } from "react-router-dom";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




// import required modules
import { Navigation } from 'swiper/modules';
import MyCalender from "./MyCalender";
import { DateRange } from "@mui/icons-material";



const Details = () => {
    const [startDate, setStartDate] = useState(null); // State to store the selected date
    const details = useLoaderData();
    const { id } = useParams();
    const detail = details.find(detail => detail._id === id);
    console.log(detail)
    if (!detail) {
        return <div>Detail not found</div>
    }
    const thailand = details.filter(item => item.category === 'thailand');
    const Privateship = details.filter(item => item.category === 'Privateship');
    const Switzerland = details.filter(item => item.category === 'Switzerland');
    return (
        <div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-8 px-10 pt-8">
                <div className="md:col-span-3">
                    <div>
                        <Swiper
                            rewind={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img className="w-full" src={detail.images?.[0]} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="w-full" src={detail.images?.[1]} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="w-full" src={detail.images?.[2]} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="w-full" src={detail.images?.[3]} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="w-full" src={detail.images?.[4]} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div>
                        <h1 className="pb-3 pt-6 text-2xl font-bold"> Some <span className="text-[#29a5ae]">Information</span> About This</h1>
                        <h2 className="text-lg text-gray-600 font-normal pb-2">{detail.descriptionTwo}</h2>
                        <h1 className="border-2 my-5"></h1>
                        <div>
                            {
                                detail.customerReview.map((review, index) =>
                                    <div key={review.id}>
                                        <div>
                                            <p className="bg-teal-50 rounded-md text-lg text-[#41b6bf] font-bold w-fit px-2">{index + 1}</p>
                                            <div className="pb-8 pt-8 w-full md:flex gap-16">
                                                <div className="">
                                                    <h1 className="font-bold pb-4 text-xl w-[200px]">{review.name}</h1>
                                                    <h2 className="card-title">
                                                        <Rating style={{ maxWidth: 115 }}
                                                            value={review.rating}
                                                            readOnly />
                                                    </h2>
                                                </div>

                                                <div className="">
                                                    <div className=" gap-96 text-">
                                                        <h1 className="font-medium pb-4 text-xl text-black">{review.title}</h1>
                                                        <div className="flex gap-6 md:gap-44">
                                                            <p>{review.description}</p>
                                                            <p className="w-[199px] justify-start">{review.commentDate}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="pb-4" />
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        {/* location */}
                        <div>
                            <h1 className="text-3xl pt-8 font-bold pb-6">Find the place <span className="text-[#4bcce6]">with the map</span></h1>
                            <div className="">
                                <div className="mapouter w-full"><div className="gmap_canvas w-full"><iframe className="w-[400px] md:w-full" width="910" height="410" id="gmap_canvas" src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co"></a></div></div>
                            </div>
                        </div>

                        <h1 className="pb-6 pt-6 text-2xl font-bold"> You can  <span className="text-[#29a5ae]">choose</span> from here</h1>


                        {/* this cart for thilend */}
                        <div>
                            <div className=" md:flex md:gap-5 gap-5 pb-5">
                                {
                                    Switzerland.map(item =>
                                        <div key={item.id} className="">
                                            <div className="card card-compact md:w-[390px] bg-base-100 shadow-xl">
                                                <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                                                    <figure><img className="h-[320px] transition duration-300 ease-in-out hover:scale-110" src={item.images} alt="Louvre" /></figure>
                                                </div>
                                                <div className="card-body">
                                                    <div className="flex justify-between">
                                                        <h2 className="card-title">{item.name}</h2>
                                                        <h2 className="card-title">
                                                            <Rating style={{ maxWidth: 115 }}
                                                                value={item.Ratings}
                                                                readOnly />
                                                        </h2>
                                                    </div>
                                                    <h2 className="text-lg -mt-1 pb-2">{item.descriptionOne}</h2>
                                                    <div className=" flex justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                                                <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#141B34" stroke-width="1.5" />
                                                                <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#141B34" stroke-width="1.5" />
                                                            </svg>
                                                            <p>{item.location}</p>
                                                        </div>
                                                        <h1 className=" text-lg"> <span className="text-lg font-bold text-[#309ecd]">${item.Price}</span> /person</h1>
                                                    </div>
                                                    <Link to={`/details/${item._id}`}>
                                                        <div className="card-actions justify-end">
                                                            <button className=" mt-3 w-full py-3 bg-[#12d0e5] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                                                {/* purple box */}
                                                                <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                                                <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                                    View Details
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        {/* this cart for thilend */}
                        <div>
                            <div className=" md:flex gap-5 pb-5">
                                {
                                    thailand.map(item =>
                                        <div key={item.id} className="">
                                            <div className="card card-compact md:w-[390px] bg-base-100 shadow-xl">
                                                <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                                                    <figure><img className="h-[320px] transition duration-300 ease-in-out hover:scale-110" src={item.images} alt="Louvre" /></figure>
                                                </div>
                                                <div className="card-body">
                                                    <div className="flex justify-between">
                                                        <h2 className="card-title">{item.name}</h2>
                                                        <h2 className="card-title">
                                                            <Rating style={{ maxWidth: 115 }}
                                                                value={item.Ratings}
                                                                readOnly />
                                                        </h2>
                                                    </div>
                                                    <h2 className="text-lg -mt-1 pb-2">{item.descriptionOne}</h2>
                                                    <div className=" flex justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                                                <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#141B34" stroke-width="1.5" />
                                                                <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#141B34" stroke-width="1.5" />
                                                            </svg>
                                                            <p>{item.location}</p>
                                                        </div>
                                                        <h1 className=" text-lg"> <span className="text-lg font-bold text-[#309ecd]">${item.Price}</span> /person</h1>
                                                    </div>
                                                    <Link to={`/details/${item._id}`}>
                                                        <div className="card-actions justify-end">
                                                            <button className=" mt-3 w-full py-3 bg-[#12d0e5] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                                                {/* purple box */}
                                                                <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                                                <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                                    View Details
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        {/* this cart for Switzerland */}
                        <div>
                            <div className=" md:flex gap-5 pb-5">
                                {
                                    Privateship.map(item =>
                                        <div key={item.id} className="">
                                            <div className="card card-compact md:w-[390px] bg-base-100 shadow-xl">
                                                <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                                                    <figure><img className="h-[320px] transition duration-300 ease-in-out hover:scale-110" src={item.images} alt="Louvre" /></figure>
                                                </div>
                                                <div className="card-body">
                                                    <div className="flex justify-between">
                                                        <h2 className="card-title">{item.name}</h2>
                                                        <h2 className="card-title">
                                                            <Rating style={{ maxWidth: 115 }}
                                                                value={item.Ratings}
                                                                readOnly />
                                                        </h2>
                                                    </div>
                                                    <h2 className="text-lg -mt-1 pb-2">{item.descriptionOne}</h2>
                                                    <div className=" flex justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                                                <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#141B34" stroke-width="1.5" />
                                                                <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#141B34" stroke-width="1.5" />
                                                            </svg>
                                                            <p>{item.location}</p>
                                                        </div>
                                                        <h1 className=" text-lg"> <span className="text-lg font-bold text-[#309ecd]">${item.Price}</span> /person</h1>
                                                    </div>
                                                    <Link to={`/details/${item._id}`}>
                                                        <div className="card-actions justify-end">
                                                            <button className=" mt-3 w-full py-3 bg-[#12d0e5] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                                                {/* purple box */}
                                                                <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                                                <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                                    View Details
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 ">

                    {/*  */}
                    <div>
                        <h1 className="text-3xl font-bold">{detail.name}</h1>
                        <p className="py-2 font-normal text-gray-600">{detail.descriptionOne}</p>
                        <div className="flex mt-1 mb-4 border-[#12D1E5] hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg hover:shadow-cyan-500/40 ...  bg-[#29cad3d2] w-fit py-2 pr-4  pl-2 rounded-md text-white items-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#ffffff" stroke-width="1.5" />
                                <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#ffffff" stroke-width="1.5" />
                            </svg>
                            <p className="">{detail.location}</p>
                        </div>
                        <h2 className="card-title">
                            <Rating style={{ maxWidth: 115 }}
                                value={detail.Ratings}
                                readOnly />
                        </h2>
                        <p className="text-lg pt-2"><span className="text-[#309ecd] font-bold">${detail.Price}</span> / per week </p>
                    </div>
                    <h1 className="border-2 my-3"></h1>

                    <div>
                        <form>
                            <div>
                                <div className=' items-center gap-0'>
                                    <h2 className='font-bold pb-2 text-xl text-gray-900'>Select your dates</h2>
                                    <div className='bg-slate-100 text-2xl border-2 rounded-sm w-fit px-0'>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="dd/MM/yyyy" // Customize the date format
                                            isClearable // 

                                        />
                                    </div>
                                </div>
                            </div>

                            {/*  */}
                            <div>
                                <input type="email" name="email" placeholder="email" className="input w-full my-2 input-bordered" required />
                                <input type="number" name="number" placeholder="+(880) 329392845" className="input w-full my-2 input-bordered" required />
                                <div className="mb-6">
                                    <textarea id="message" name="text" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                </div>
                                <Link to="/payment">
                                    <div className="card-actions justify-end">
                                        <button className=" mt-0 w-full py-3 bg-[#12d0e5] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                            {/* purple box */}
                                            <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                            <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                Book Now
                                            </span>
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;
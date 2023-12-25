import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import UseMenus from "../../hooks/UseMenus";
import { Rating } from "@mui/material";
import CartInTourse from "./ToursCartOne";
import ToursCartOne from "./ToursCartOne";

const Tours = () => {

    const PageLink = ({ pageSrc, count }) => {
        return (
            <>
                <li className="px-[6px]">
                    <a
                        href={pageSrc}
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
                    >
                        {count}
                    </a>
                </li>
            </>
        );
    };



    return (
        <div>
            <Helmet>
                <title>Travel / Tours</title>
            </Helmet>
            <div className="hero mb-16" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/bf/46/9a/bf469ae026d5a9388c9877e788697ec8.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-12">
                        <h1 className="mb-5 text-4xl font-bold">Tour Package</h1>
                        <div className="card-actions justify-center">
                            <Link to="/">
                                <button className="btn w-full mt-4 bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... ">Back to Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="px-12">
                <div className="grid md:grid-cols-4 gap-12">
                    <div className="bg-slate-100 h-fit rounded-lg p-4 col-span-1">
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
                            <CartInTourse></CartInTourse>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-white text-center py-20 dark:bg-dark">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mb-12 inline-flex rounded-xl border border-stroke bg-white p-4 dark:border-dark-3 dark:bg-dark-2">
                                <ul className="-mx-[6px] flex items-center">
                                    <li className="px-[6px]">
                                        <a
                                            href="/#"
                                            className="flex h-9 w-9 items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
                                        >
                                            <span>
                                                <svg
                                                    width={8}
                                                    height={15}
                                                    viewBox="0 0 8 15"
                                                    className="fill-current stroke-current"
                                                >
                                                    <path
                                                        d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                                                        strokeWidth="0.3"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>

                                    <PageLink count="1" pageSrc="/#" />
                                    <PageLink count="2" pageSrc="/#" />
                                    <PageLink count="3" pageSrc="/#" />

                                    <li className="px-[6px]">
                                        <a
                                            href="/#"
                                            className="flex h-9 w-9 items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
                                        >
                                            <span>
                                                <svg
                                                    width={8}
                                                    height={15}
                                                    viewBox="0 0 8 15"
                                                    className="fill-current stroke-current"
                                                >
                                                    <path
                                                        d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                                                        strokeWidth="0.3"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tours;
import { Link } from "react-router-dom";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Helmet } from "react-helmet-async";

const Faq = () => {
    return (
        <div>
            <Helmet>
                <title>Travel / FAQ</title>
            </Helmet>
            <div className="hero mb-6" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/ab/d9/aa/abd9aaad4746e0b8111361b8a2b2a9cd.jpg)' }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-12">
                        <h1 className="mb-5 text-4xl text-white font-bold">FAQ</h1>
                        <div className="card-actions justify-end">
                            <Link to="/">
                                <button className="btn w-full mt-4 bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... ">Back to Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div>
                <div className="text-center py-10">
                    <h1 className="text-4xl font-bold text-[#0b1721] pb-3">Frequently Asked <span className="text-[#37d8dd]">Questions</span> </h1>
                    <p className="text-gray-600">Frequently asked questions about our business plans</p>
                </div>

                {/*  */}
                <div className="grid items-center pb-12 px-10 md:grid-cols-2 gap-10">
                    <img src="https://i.ibb.co/BC0rWht/image-60.png" alt="" />
                    <div>
                        <div>
                            <div className=" mb-2 shadow-[#ffffff] shadow-lg">
                                <Accordion className="">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <span className="text-[#12ced8] text-lg font-bold">01 </span> <span className="font-bold text-base text-[#0a131e]">What industries do you specialize in?</span> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className=" mb-2 shadow-[#ffffff] shadow-lg">
                                <Accordion className="">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <span className="text-[#12ced8] text-lg font-bold">02 </span> <span className="font-bold text-base text-[#0a131e]">Do we really need to business plan?</span> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className=" mb-2 shadow-[#ffffff] shadow-lg">
                                <Accordion className="">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <span className="text-[#12ced8] text-lg font-bold">03 </span> <span className="font-bold text-base text-[#0a131e]">What makes your business plans so special?</span> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className=" mb-2 shadow-[#ffffff] shadow-lg">
                                <Accordion className="">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <span className="text-[#12ced8] text-lg font-bold">04 </span> <span className="font-bold text-base text-[#0a131e]">Do we really need to business plan? </span> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className=" mb-2 shadow-[#ffffff] shadow-lg">
                                <Accordion className="">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <span className="text-[#12ced8] text-lg font-bold">05 </span> <span className="font-bold text-base text-[#0a131e]">What industries do you specialize in?</span> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className=" mb-2 shadow-[#ffffff] shadow-lg">
                                <Accordion className="">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <span className="text-[#12ced8] text-lg font-bold">06 </span> <span className="font-bold text-base text-[#0a131e]">Do we really need to business plan? </span> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className=" mb-2 shadow-[#ffffff] shadow-lg">
                                <Accordion className="">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <span className="text-[#12ced8] text-lg font-bold">07 </span> <span className="font-bold text-base text-[#0a131e]">What industries do you specialize in?</span> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className=" mb-2 shadow-[#ffffff] shadow-lg">
                                <Accordion className="">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <span className="text-[#12ced8] text-lg font-bold">08 </span> <span className="font-bold text-base text-[#0a131e]">Do we really need to business plan? </span> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className=" mb-2 shadow-[#ffffff] shadow-lg">
                                <Accordion className="">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <span className="text-[#12ced8] text-lg font-bold">09 </span> <span className="font-bold text-base text-[#0a131e]">What industries do you specialize in?</span> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className=" mb-2 shadow-[#ffffff] shadow-lg">
                                <Accordion className="">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <span className="text-[#12ced8] text-lg font-bold">10 </span> <span className="font-bold text-base text-[#0a131e]">Do we really need to business plan? </span> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className=" mb-2 shadow-[#ffffff] shadow-lg">
                                <Accordion className="">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> <span className="text-[#12ced8] text-lg font-bold">11 </span> <span className="font-bold text-base text-[#0a131e]">What industries do you specialize in?</span> </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>


                            {/* <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography> <span className="text-[#49cad4]">01</span> Accordion 2</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
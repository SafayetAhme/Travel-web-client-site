import { Link } from "react-router-dom";


const ContactUs = () => {
    return (
        <div>
            <div>
                <div className="hero mb-6" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/bf/46/9a/bf469ae026d5a9388c9877e788697ec8.jpg)' }}>
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md py-12">
                            <h1 className="mb-5 text-4xl text-white font-bold">Contact Us</h1>
                            <button className="bg-[#12ced8] px-6 text-white py-2 rounded-lg"><Link to="/">Back to Home</Link></button>
                        </div>
                    </div>
                </div>

                <div className="justify-center flex gap-8">
                    <div className="flex items-center">
                        <img className="w-[140px]" src="https://i.ibb.co/WxjYVwx/Group-52.png" alt="" />
                        <div className="-ml-5 pb-7">
                            <h1 className="text-xl font-bold">Email Us</h1>
                            <h1 className="text-[#5c6161]">asafayet21@gmail.com</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img className="w-[140px]" src="https://i.ibb.co/0KFRJc6/Group-53.png" alt="" />
                        <div className="-ml-5 pb-7">
                            <h1 className="text-xl font-bold">Call Us</h1>
                            <h1 className="text-[#5c6161]">(888) 555 - 6666</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img className="w-[140px]" src="https://i.ibb.co/mGGwmwN/Group-54.png" alt="" />
                        <div className="-ml-5 pb-7">
                            <h1 className="text-xl font-bold">Our Location</h1>
                            <h1 className="text-[#5c6161]">102, Sylhet Sunamganj, 094837</h1>
                        </div>
                    </div>
                </div>

                <div className="grid px-16 gap-6 py-16 grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-bold pb-6">Send Us A Message</h1>
                        <div className="flex gap-4 pb-4">
                            <input type="name" name="name" placeholder="name" className="input input-bordered w-full " />
                            <input type="email" name="email" placeholder="email" className="input input-bordered w-full " />
                        </div>
                        <div className="flex gap-4 pb-4">
                            <input type="number" placeholder="phone (optional)" className="input input-bordered w-full " />
                        </div>
                        <textarea placeholder="Message" name="message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        <button className="btn mt-8 px-8 bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... ">SEND MESSAGE</button>

                    </div>
                    <div className="">
                        <h1 className="text-4xl font-bold pb-6">Location</h1>
                        <div>
                            <div className="mapouter"><div className="gmap_canvas"><iframe width="564" height="410" id="gmap_canvas" src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co"></a></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
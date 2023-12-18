import { Link } from "react-router-dom";


const Faq = () => {
    return (
        <div>
            <div className="hero mb-6" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/ab/d9/aa/abd9aaad4746e0b8111361b8a2b2a9cd.jpg)' }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-12">
                        <h1 className="mb-5 text-4xl text-white font-bold">FAQ</h1>
                        <button className="bg-[#12ced8] px-6 text-white py-2 rounded-lg"><Link to="/">Back to Home</Link></button>
                    </div>
                </div>
            </div>

            {/*  */}
            <div>

            </div>
        </div>
    );
};

export default Faq;
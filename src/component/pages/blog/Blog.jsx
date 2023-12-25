import { Helmet } from "react-helmet-async";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Blog = () => {
    const [blogs, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
    }, [])

    return (
        <div className="px-12">
            <Helmet>
                <title>Travel / Blog</title>
            </Helmet>
            <div className="">
                <div className="text-center">
                    <div className="w-full">
                        <div class="relative w-full overflow-hidden bg-cover bg-no-repeat">
                            <figure><img className="h-[320px] w-full md:pl-[50px] my-8 transition duration-300 ease-in-out hover:scale-110" src="https://i.ibb.co/znRBPSN/Group-46.png" alt="Louvre" /></figure>
                        </div>
                    </div>
                    <div className="pl-12 pb-12">
                        <h1 className="text-5xl font-bold">Our Blog Post</h1>
                        <p className="pt-4 text-[#464b4b]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem <br /> quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="card-actions pt-3 justify-center">
                            <button className=" mt-3 px-12 py-3 bg-[#12d0e5bb] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                {/* purple box */}
                                <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                    View Details
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full border-2 mb-12">
                    </div>
                    <div className="pl-12 pb-12">
                        <h1 className="text-xl pb-2 text-[#565c5c]  font-bold">NEW ARTICLES</h1>
                        <h1 className="text-5xl font-bold">Featured <span className="text-[#12D1E5]">Blog</span> Posts</h1>
                        <p className="pt-4 text-[#464b4b]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    {/* items */}
                    <div className="grid gap-6 pb-6 md:grid-cols-2">
                        {
                            blogs.map(blog =>
                                <div key={blog.id} className=" w-full rounded-2xl bg-base-100 shadow-xl">
                                    <Link to={`/blogdetails/${blog._id}`}>
                                        <div class="relative w-full overflow-hidden bg-cover bg-no-repeat">
                                            <figure><img className="h-[320px] w-full transition duration-300 ease-in-out hover:scale-110" src={blog.image} alt="Louvre" /></figure>
                                        </div>
                                    </Link>
                                    <div className="">
                                        <div className="p-4">
                                            <h2 className="text-start font-bold pb-2">{blog.maintitle}</h2>
                                            <h2 className="text-start text-base">{blog.descriptionOne}</h2>
                                            <div className=" flex pt-4 gap-2">
                                                <img className="w-[50px] h-[50px] rounded-full" src={blog.profileimg} alt="" />
                                                <div className=" text-start">
                                                    <h1 className=" text-xl font-medium">{blog.name}</h1>
                                                    <h1>{blog.title}</h1>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;
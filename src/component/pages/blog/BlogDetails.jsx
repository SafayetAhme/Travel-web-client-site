import { useLoaderData, useParams } from "react-router-dom";


const BlogDetails = () => {
    const blogs = useLoaderData();
    const { id } = useParams();
    const blog = blogs.find(blog => blog._id === id);
    console.log(blog)
    return (
        <div className="px-10">
            <div className="pt-8">
                <img className="w-full rounded-xl h-[700px]" src={blog.image} alt="" />
            </div>
            <div>
                <div>
                    <div className="flex pt-4 items-center gap-2">
                        <img className="w-[60px] rounded-full h-[60px]" src={blog.profileimg} alt="" />
                        <div>
                            <h1 className="text-xl font-medium">{blog.name}</h1>
                            <p>{blog.title}</p>
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl pt-6 font-medium pb-2">{blog.maintitle}</h1>
                <p className="pb-10">{blog.descriptionTwo}</p>
            </div>
        </div>
    )
}

export default BlogDetails
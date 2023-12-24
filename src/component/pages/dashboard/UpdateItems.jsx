import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useLoaderData } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Updateitems = () => {
    const { category, name, Ratings, descriptionOne, location, Price, _id } = useLoaderData();

    const { register, handleSubmit } = useForm();
    const axiosPublic = UseAxiosPublic();
    const axisoSecure = UseAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
      
        // ...
      
        const imageFile = { image: data.images[0] };
        // ...
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menusItem = {
                name: data.name,
                category: data.category,
                Ratings: data.Ratings,
                descriptionOne: data.descriptionOne,
                location: data.location,
                Price: data.Price,
                images: res.data.data.display_url
            }
            // 
            const menuRes = await axisoSecure.patch(`/menus/${_id}`, menusItem);
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {
                // 
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} added to the items`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };


    return (
        <div>
            <div className="px-12">
                <div className="text-center py-12">
                    <h1 className="text-2xl pb-2 text-green-600 font-bold">Add some Itesm</h1>
                    <p>if you want to add some items you can add.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Place Name</span>
                        </label>
                        <input
                            type="name"
                            defaultValue={name}
                            placeholder="Type here"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">hwo many star or ratting</span>
                            </label>
                            <input
                                type="Ratings"
                                defaultValue={Ratings}
                                placeholder="Type here"
                                {...register('Ratings', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Locations</span>
                            </label>
                            <input
                                type="location"
                                defaultValue={location}
                                placeholder="Type here"
                                {...register('location', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="thailand">thailand</option>
                                <option value="Privateship">Privateship</option>
                                <option value="Switzerland">Switzerland</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="Price"
                                defaultValue={Price}
                                placeholder="Price"
                                {...register('Price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* recipi */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipi Details</span>
                        </div>
                        <textarea
                            defaultValue={descriptionOne}
                            {...register('descriptionOne', { required: true })}
                            className="textarea textarea-bordered h-24"
                            placeholder="Bio"></textarea>
                    </label>

                    <div className="form-control w-full my-6">
                        <input
                            onChange={(e) => register('images', { required: true }).onChange(e)}
                            type="file"
                            className="file-input w-full max-w-xs"
                        />
                    </div>

                    <div className="text-center">
                        <button className="btn hover:bg-emerald-400 hover:border-emerald-400 hover:text-white w-[300px]">
                            Update items
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Updateitems; 
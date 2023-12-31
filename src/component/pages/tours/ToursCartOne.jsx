import { Rating } from "@mui/material";
import UseMenus from "../../hooks/UseMenus";
import { Link } from "react-router-dom";


const CartInTourse = () => {
    const [menus] = UseMenus();

    return (
        <div>
            <div>
                <div className=" grid md:grid-cols-2 gap-4">
                    {
                        menus.map(item =>
                            <div key={item.id} className="grid pb-0 pt-1 gap-5 md:grid-cols-3">
                                <div className="card card-compact md:w-[430px] bg-base-100 shadow-xl">
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
                                            <h1 className=" text-lg"> <span className="text-lg font-bold text-[#309ecd]">${item.Price}</span> /per week</h1>
                                        </div>
                                        <Link to={`/details/${item._id}`}>
                                            <div className="card-actions justify-end">
                                                <button className=" mt-3 w-full py-4 bg-[#12d0e5] relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
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
    )
}

export default CartInTourse;
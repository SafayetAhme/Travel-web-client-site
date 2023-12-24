import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/tours">Tours</NavLink></li>
        <li><NavLink to="/destination">Gallery</NavLink></li>
        <li><NavLink to="/aboutus">About Us</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
        <li><NavLink to="/contactus">Contact Us</NavLink></li>
    </>

    return (
        <div className=" container mx-auto">
            <div className="navbar bg-slate-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn  bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] outline-none hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-[#12d0e56b] border-[#12d0e52e] text-white hover:bg-[#04e6ff3b] outline-none hover:border-[#04e6ff08] shadow-lg shadow-cyan-500/50 ...  rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="font-black  shadow-cyan-500/50 text-2xl">Tour <span className="text-[#12D1E5]">Place</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user ? <>
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div tabIndex={0}>
                                        <img className="w-[46px] rounded-full h-[46px]" src="https://images.unsplash.com/photo-1613742743080-a59851f3008d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] rounded-md bg-[#ffffff] menu p-2 ">
                                        <li className="text-white pb-2 pt-1">{user?.email}</li>
                                        <li className=" bg-gray-200 rounded-md mb-2 pb-1 text-lg"><NavLink to="/blog"> User Profile</NavLink></li>
                                        <li className=" bg-gray-200 rounded-md mb-2 pb-1 text-lg"><NavLink to="/dashboard">Dashboard</NavLink></li>
                                        <li onClick={handleLogOut} className=" bg-gray-200 rounded-md mb-2 text-lg"><NavLink to="/blog">Log Out</NavLink></li>
                                    </ul>
                                </div>
                            </> :
                                <p className="flex items-center gap-3">
                                    <NavLink className="bg-slate-100 px-3 py-1 rounded-md hover:text-white hover:bg-[#26d4da]" to="/signin">Sign In</NavLink>
                                    <NavLink className="bg-slate-100 px-3 py-1 rounded-md hover:text-white hover:bg-[#26d4da]" to="/signup">Sign Up</NavLink>
                                </p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
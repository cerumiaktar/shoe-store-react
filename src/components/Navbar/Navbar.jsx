import { FaInstagram, FaYoutube, FaFacebookF, FaTiktok } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoMdCall,IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoSearchOutline,IoCartOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allCategory'>Categories</NavLink></li>
        <li><NavLink to='/products'>Products</NavLink></li>
        <li><NavLink to='/men'>Men</NavLink></li>
        <li><NavLink to='/women'>Women</NavLink></li>
        <li><NavLink to='/kids'>Kids</NavLink></li>
    </>
    return (
        <div>
            <div className="bg-[#FAD7DB]">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-4">
                    <div className="flex md:flex-row items-center gap-3">
                        <span className="border p-2 rounded-full"><FaFacebookF /></span>
                        <span className="border p-2 rounded-full"><FaInstagram /></span>
                        <span className="border p-2 rounded-full"><FaYoutube /></span>
                        <span className="border p-2 rounded-full"><FaTiktok /></span>
                    </div>
                    <div className="flex items-center gap-6">
                        <MdKeyboardArrowLeft />
                        <p className="text-center">🔥 "Double the Comfort, Double the Savings! <br />Buy 2 Pairs, Save 200 TK! Use code CS200 at Checkout."</p>
                        <MdKeyboardArrowRight />
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                        <IoMdCall />
                        <p>+8801323456789</p>
                    </div>
                </div>
            </div>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 text-lg w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <h1 className="text-3xl font-bold text-[#D4737E]">Comfortstep</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end text-xl space-x-4">
                    <IoSearchOutline />
                    <IoMdHeartEmpty />
                    <IoCartOutline />
                    <AiOutlineUser />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
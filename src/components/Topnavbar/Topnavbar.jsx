import React, { useContext } from 'react';
import { useNavigate, NavLink, useLocation, Link, Navigate } from 'react-router-dom';
import { IoCartOutline as CartIcon } from "react-icons/io5";
import { FaRegHeart as HeartIcon } from "react-icons/fa";
import { ThemeContext } from '../../root';


const Topnavbar = () => {
    // max-w-[1280px]
    const location = useLocation()
    const isUrlRoot = (location.pathname === "/");
    const navStyle = isUrlRoot ? 'mx-7 mt-7 bg-primary-1' : 'py-6'
    const navBarStyle = isUrlRoot ? ' text-white' : ''
    const navigate = useNavigate();
    const {switchBtn,setSwitchBtn} = useContext(ThemeContext)

    const jumpToWishlist = (val) => {
        setSwitchBtn(val)
        navigate("dashboard")}

    return (
        <div className={`${navStyle} rounded-t-3xl `}>

            <div className={`navbar ${navBarStyle} flex mx-auto max-w-[1280px] `}>
                
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
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
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            <li><a>Home</a></li>
                            <li><a>Statistics</a></li>
                            <li><a>Dashboard</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        <NavLink to="/">
                        <li><a className={isUrlRoot ? 'underline underline-offset-2 font-bold' : ''}>Home</a></li>
                        </NavLink>

                        {/* <li><a>Statistics</a></li> */}
                        <NavLink to="/statistics" className={({isActive})=> isActive ? 'text-primary-1 font-bold' : ''}>
                            <li><a>Statistics</a></li>
                        </NavLink>

                        <NavLink to="/dashboard" className={({isActive})=> isActive ? 'text-primary-1 font-bold' : ''}>
                            <li><a>Dashboard</a></li>
                        </NavLink>

                        <NavLink to="/faq" className={({isActive})=> isActive ? 'text-primary-1 font-bold' : ''}>
                            <li><a>FAQ</a></li>
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-2 pr-2">
                    
                    <button className='btn btn-circle text-lg bg-white' onClick={()=>jumpToWishlist(true)}><CartIcon /></button>
                    

                    <button className='btn btn-circle text-lg bg-white' onClick={()=>jumpToWishlist(false)}><HeartIcon /></button>
                    
                </div>

            </div>
        </div>
    );
    
};

export default Topnavbar;

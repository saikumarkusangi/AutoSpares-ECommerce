
import Logo from "../../assets/logo.png";
import {RiMenu2Fill} from "react-icons/ri";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {FiSearch} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = ()=> {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    return(
        <>
        <div className=" sticky top-0 z-50 shadow-md shadow-gray-300 w-full  bg-white flex flex-col lg:flex-row md:flex-row lg:flex mg:flex justify-between gap-6  py-5 px-2  mx-auto ">
          <span>
            <div className="flex justify-between px-2">
                <RiMenu2Fill onClick={toggle} size={28} className="lg:hidden md:hidden text-gray-800"/>
                <NavLink to="/"> <img className="w-52 md:w-72 lg:w-72" src={Logo} alt="logo"/></NavLink>
                <NavLink className="lg:hidden md:hidden" to="/cart"><AiOutlineShoppingCart size={28} className="text-gray-800" /></NavLink>
            </div>
          </span> 
    
          <span className="flex space-x-4 items-center flex-col-1 justify-center  ">
            <div className="flex relative w-full ">
                <input placeholder="Search..." className="bg-gray-200 px-4 pr-14 py-2 rounded-lg ml-3 mr-3 w-full focus:outline-none focus:ring-[1px] focus:ring-[#105c64]"/>
                <button className="bg-[#105c64] h-[100%] w-[10%] absolute right-3 flex flex-col items-center justify-center rounded-tr-md rounded-br-md"> <FiSearch className="text-white" size={22}/></button>
            </div>
        
            <span className=" hidden md:flex lg:flex  gap-5 min-w-max items-center justify-end">
                <NavLink className="text-lg" to="/">Home</NavLink>
                <NavLink className="text-lg  border-[1px] text-white bg-[#105c64] border-[#105c64] py-1 px-3 rounded-md hover:shadow-md transition-all hover:shadow-gray-200 " to="/">Log In</NavLink>
                <NavLink className="text-lg border-[1px] border-[#105c64] text-[#105c64] py-1 px-2 hover:bg-[#105c64] rounded-md transition-all duration-300 hover:text-white" to="/">Sign Up</NavLink>
            </span>
            <NavLink className="hidden md:block lg:block" to="/cart"><AiOutlineShoppingCart size={32} className="text-gray-800" /></NavLink>
          </span>
          
        </div>
        {isOpen && (
            <div className=" z-50 left-0 top-0 fixed h-full w-[100%]  bg-[rgba(0,0,0,0.4)] ">
               <div className="relative w-[60%] px-4 py-20 h-full bg-[#105c64] flex flex-col gap-5 min-w-max items-center animate-[slide_0.3s_ease-in-out]">
               <AiOutlineClose onClick={toggle} size={28} className="absolute right-3 top-5 text-white"/>
               <NavLink className="text-xl text-center text-white" to="/">Home</NavLink>
               <NavLink className="text-xl text-center text-white" to="/">Tires & Wheels</NavLink>
               <NavLink className="text-xl text-center text-white" to="/">Spare Parts</NavLink>
               <NavLink className="text-xl text-center text-white" to="/">Engine Oils</NavLink>
               <NavLink className="text-xl text-[#105c64] text-center border-[1px] rounded-lg w-[80%] py-2  bg-white border-[#105c64] " to="/">Log In</NavLink>
               <NavLink className="text-xl text-center border-[1px] rounded-lg w-[80%] py-2 text-white border-white" to="/">Sign Up</NavLink>
               </div>
            </div>
        ) }
        </>
            
    )

    
}

export default Header
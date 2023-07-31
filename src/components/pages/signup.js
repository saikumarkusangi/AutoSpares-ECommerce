import { Link } from "react-router-dom";

import {PiEyeClosedBold,PiEyeBold} from "react-icons/pi";
import { useState } from "react";


const SignUp = ()=> {
    const [showPassword,setShowPassword] = useState(false);
    const toggle = () => setShowPassword(!showPassword);

    return(
        
        <div className="px-8 py-4 mt-4 mb-10">
            <h1 className="text-3xl font-bold text-[#1d575e] text-center mb-4">Create Account</h1>
            <hr className="bg-gray-100 h-[3px] mb-10"/>
            <form className="mt-10 flex flex-col gap-5">
            <input placeholder="Name" className="border-2 w-full px-4 py-3 border-gray-300 rounded-md focus:ring-[#326d74] focus:ring-2 focus:outline-none"></input>
                <input placeholder="Mobile Number" className="border-2 w-full px-4 py-3 border-gray-300 rounded-md focus:ring-[#326d74] focus:ring-2 focus:outline-none"></input>
                <span className="flex relative">
                <input placeholder="Password" className="border-2 w-full pl-4 pr-12 py-3 border-gray-300 rounded-md  focus:ring-[#326d74] focus:ring-2 focus:outline-none"></input>
                {showPassword ? <PiEyeBold onClick={toggle} size={22} className="absolute right-5 top-4 text-gray-400"/>
                              : <PiEyeClosedBold onClick={toggle} size={22} className="absolute right-5 top-4 text-gray-400"/>}
                </span>
                <p>If you are agree to our <Link to="/privacy-policy" className="text-blue-700">privacy policy</Link> ,Then press continue.</p>
                <button className="bg-[#326d74] py-3 w-full rounded-md text-white font-medium">Continue</button>
            </form>
            <p className="mt-5 ">Already have an account? <Link to="/auth/login" className="font-bold text-blue-700">Login</Link></p>
        </div>
    )
}

export default SignUp;
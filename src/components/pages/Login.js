import { Link } from "react-router-dom";

import {PiEyeClosedBold,PiEyeBold} from "react-icons/pi";
import { useState } from "react";


const Login = ()=> {
    const [showPassword,setShowPassword] = useState(false);
    const toggle = () => setShowPassword(!showPassword);

    return(
        <div className="px-8 py-4 mt-8 mb-12">
            <h1 className="text-3xl text-center font-bold text-[#1d575e] mb-4">Login</h1>
            <hr className="bg-gray-100 h-[3px] mb-10"/>
            <form className="mt-10 flex flex-col gap-5">
                <input placeholder="Mobile Number" className="border-2 w-full pl-4 pr-10 py-3 border-gray-300 rounded-md focus:ring-[#326d74] focus:ring-2 focus:outline-none"></input>
                <span className="flex relative">
                    <input placeholder="Password" className="border-2 w-full pl-4 pr-12 py-3 border-gray-300 rounded-md  focus:ring-[#326d74] focus:ring-2 focus:outline-none"></input>
                    {showPassword ? <PiEyeBold onClick={toggle} size={22} className="absolute right-5 top-4 text-gray-400"/>
                                  : <PiEyeClosedBold onClick={toggle} size={22} className="absolute right-5 top-4 text-gray-400"/>}
                </span>
                <Link className="text-blue-700">Forgot password?</Link>
                <button className="bg-[#326d74] py-3 w-full rounded-md text-white font-medium">Continue</button>
            </form>
            <p className="mt-5 ">Don't have an account? <Link to="/auth/sign-up" className="font-bold text-blue-700">Create One</Link></p>
        </div>
    )
}

export default Login;
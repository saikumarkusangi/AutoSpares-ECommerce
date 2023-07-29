import AOS from "aos";
import { useEffect } from "react";
import {AiOutlineArrowRight} from "react-icons/ai";




const Collections = ()=> {


    return(
        <div className="mt-5">
           <h1 data-aos-once="true" data-aos="fade-right" className="text-2xl font-lightbold px-4 mb-2 ">Our Collection</h1>
           
           <div className="mg:flex lg:flex flex-wrap">
            <div  data-aos-once="true" data-aos="zoom-in"  className="flex flex-col h-52 bg-cover bg-right transition-all ease-in duration-0 hover:duration-700 lg:hover:bg-[length:105%]  px-4 gap-2 justify-center md:px-10 lg:px-10 py-4 mt-2 ml-4 mr-4 rounded-lg  bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url('./assets/engine-oils.jpg')] ">
                <p data-aos-once="true" data-aos="fade-dup" className="bg-red-500 text-white w-28 px-2 py-1 rounded-full text-xs">on sale this week</p>
                <h2 data-aos-once="true" data-aos="fade-up" className="text-3xl text-white font-medium ">Engine Oils</h2>
                <p data-aos-once="true" data-aos="fade-up" className="py-2 text-white">All Kind of bike engine oils are available</p>
                <button data-aos-once="true" data-aos="fade-up" className="bg-white w-28 px-2 py-1 justify-center text-md flex items-center gap-1 rounded-md">Shop Now <AiOutlineArrowRight/></button>
            </div>
            <div data-aos-once="true" data-aos="fade-up"  className="flex flex-col h-52 bg-cover transition ease-in-out delay-900 lg:hover:bg-[length:130%] px-4 gap-2 justify-center md:px-10 lg:px-10 py-4 mt-4 ml-4 mr-4 rounded-lg bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.5)),url('./assets/spares.jpg')] ">
                <p data-aos-once="true" data-aos="fade-dup" className="bg-red-500 text-white w-28 px-2  py-1 rounded-full text-xs">on sale this week</p>    
                <h2 data-aos-once="true" data-aos="fade-up" className="text-3xl text-white font-medium">Spare Parts</h2>
                <p data-aos-once="true" data-aos="fade-up" className="py-2 text-white">All Kind of bike spare parts are available</p>
                <button data-aos-once="true" data-aos="fade-up" className="bg-white w-28 px-2 py-1 justify-center text-md flex items-center gap-1 rounded-md">Shop Now <AiOutlineArrowRight/></button>
            </div>
            <div data-aos-once="true" data-aos="fade-up"  className="flex flex-col h-52 bg-cover transition ease-in-out delay-900 lg:hover:bg-[length:105%] px-4 gap-2 justify-center md:px-10 lg:px-10 py-4 mt-4 ml-4 mr-4 rounded-lg bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.5)),url('./assets/tyres.jpeg')]">
                <p data-aos-once="true" data-aos="fade-dup" className="bg-red-500 text-white w-28 px-2  py-1 rounded-full text-xs">on sale this week</p>   
                <h2 data-aos-once="true" data-aos="fade-up" className="text-3xl text-white font-medium">Tyres</h2>
                <p data-aos-once="true" data-aos="fade-up" className="py-2 text-white">All Kind of bike tyres are available</p>
                <button data-aos-once="true" data-aos="fade-up" className="bg-white w-28 px-2 py-1 justify-center flex items-center gap-1 text-md rounded-md">Shop Now <AiOutlineArrowRight/></button>
            </div>
          </div>
        </div>
    )
}

export default Collections;
import {AiOutlineArrowRight} from "react-icons/ai";

const Collections = ()=> {
    return(
        <div>
           <h1 className="text-2xl font-lightbold px-4 mb-2 ">Our Collection</h1>
           
           <div className="mg:flex lg:flex flex-wrap">
            <div className="flex flex-col h-52 bg-cover bg-right hover:bg-[length:120%_120%]  px-4 gap-2 justify-center md:px-10 lg:px-10 py-4 mt-2 ml-4 mr-4 rounded-lg  bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url('https://raw.githubusercontent.com/devigoprojects/jobs/main/engine-oils.jpg')]">
                <p className="bg-red-500 text-white w-28 px-2 rounded-full text-xs">on sale this week</p>
                <h2 className="text-2xl text-white font-medium ">Engine Oils</h2>
                <p className="py-2 text-white">All Kind of bike engine oils are available</p>
                <button className="bg-white w-28 px-2 py-1 justify-center text-md flex items-center gap-1 rounded-md">Shop Now <AiOutlineArrowRight/></button>
            </div>
            <div className="flex flex-col h-52 bg-cover hover:bg-[length:120%_120%] px-4 gap-2 justify-center md:px-10 lg:px-10 py-4 mt-4 ml-4 mr-4 rounded-lg bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.5)),url('https://raw.githubusercontent.com/devigoprojects/jobs/main/spare-parts.jpg')]">
                <p className="bg-red-500 text-white w-28 px-2 rounded-full text-xs">on sale this week</p>    
                <h2 className="text-2xl text-white font-medium">Spare Parts</h2>
                <p className="py-2 text-white">All Kind of bike spare parts are available</p>
                <button className="bg-white w-28 px-2 py-1 justify-center text-md flex items-center gap-1 rounded-md">Shop Now <AiOutlineArrowRight/></button>
            </div>
            <div className="flex flex-col h-52 bg-cover hover:bg-[length:120%_120%] px-4 gap-2 justify-center md:px-10 lg:px-10 py-4 mt-4 ml-4 mr-4 rounded-lg bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.5)),url('https://i0.wp.com/micks-garage.co.uk/wp-content/uploads/2019/01/Tyres.jpg')]">
                <p className="bg-red-500 text-white w-28 px-2 rounded-full text-xs">on sale this week</p>   
                <h2 className="text-2xl text-white font-medium">Tyres</h2>
                <p className="py-2 text-white">All Kind of bike tyres are available</p>
                <button className="bg-white w-28 px-2 py-1 justify-center flex items-center gap-1 text-md rounded-md">Shop Now <AiOutlineArrowRight/></button>
            </div>
          </div>
        </div>
    )
}

export default Collections;
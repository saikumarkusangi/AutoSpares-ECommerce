import axios from "axios";
import { useEffect,useState } from "react";


const Banner = ()=> {
    
    return(
        <div className="flex px-2 my-4 overflow-scroll">
            <img className="rounded-lg min-h-max object-cover"  src="https://klbtheme.com/partdo/wp-content/uploads/2022/11/slider-01.jpg" alt="banner"/>
            <img className="rounded-lg h-1/2" src="https://res.cloudinary.com/jerrick/image/upload/v1613318166/60294816e5abae001c5260be.jpg" alt="banner"/>
        </div>
    )
}

export default Banner;
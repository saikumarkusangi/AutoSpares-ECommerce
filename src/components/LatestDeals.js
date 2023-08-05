import {PiPackageThin} from "react-icons/pi";
import {BsArrowRight} from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const LatestDeals = ()=> {


    const [products, setProducts] = useState([]);
    const getApiData = async () => {
        const res = await  axios.get('https://fakestoreapi.com/products')
        setProducts(res.data)
    }

    useEffect(() => {
       getApiData()
    }, []);
    
    console.log("Current dataList:", products);

 
    return(
        <div className="mt-5">
           <span className="flex justify-between px-4">
            <span>
                <h1 data-aos-once="true" data-aos="fade-right" className="text-2xl font-lightbold">Latest Deals</h1>
                <p data-aos-once="true" data-aos="fade-right" className="text-sm text-gray-400 font-lightbold">Dont miss out this weeks deals</p>
            </span>
            <Link data-aos-once="true" data-aos="fade-left" to="/shop/Latest-Deals"><span className="flex flex-col-1 items-center gap-1 hover:text-red-600">View All<BsArrowRight/></span></Link>
           </span>
           <div className="flex pl-2 pt-2  mx-2 gap-2 overflow-y-hidden overflow-scroll [&::-webkit-scrollbar]:hidden">
           {products.map(product  =>  (
            <ProductCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} />
          ))}
          </div>
        </div>
    )
}

export default LatestDeals;
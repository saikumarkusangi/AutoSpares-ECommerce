import { Link, useParams } from "react-router-dom"
import {BiMinus} from "react-icons/bi";
import {GrFormAdd} from "react-icons/gr";
import { useEffect, useState } from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {LiaShippingFastSolid} from "react-icons/lia";
import {VscVerified} from "react-icons/vsc";
import {PiArrowsCounterClockwise,PiPackageThin} from "react-icons/pi";
import axios from "axios";

const Product = () => {
    const price = 230;
    const params = useParams();
    const [quntity,setQuntity] = useState(1);
    const increase = ()=>{
        setQuntity(quntity+1)
    }
    const decrease = ()=>{
       if(quntity > 1){
        setQuntity(quntity-1)
       }
      
    }
    
    const [product, setProduct] = useState({});
    const [relatedProducts,setRelatedProducts] = useState([])
  
    const getApiData = async () => {
        const res = await  axios.get(`https://fakestoreapi.com/products/${params.id}`)
        setProduct(res.data)
    }
    
    const getRelatedProducts = async () => {
        const res =await axios.get(`https://fakestoreapi.com/products/category/${product.category}/?limit=5`);
        setRelatedProducts(res.data)
    }

    useEffect(() => {
       getApiData();
       getRelatedProducts();
    }, []);

    return(
        <>        
       
        <div className="px-4 py-4 relative">
            <span data-aos-once="true" data-aos="zoom-in" className=" bg-red-500 text-white text-sm px-3 py-1 rounded-lg absolute top-8 left-8 z-10">8% OFF</span>
            <img data-aos-once="true" data-aos="zoom-in" className="border-2 rounded-lg" src={product.image} alt="product"/>
            <h1 data-aos-once="true" data-aos="fade-up" className="font-bold text-2xl mt-4">{product.title}</h1>
            <p data-aos-once="true" data-aos="fade-right" className="text-gray-400 text-sm mt-2">{product.description}</p>
            <span data-aos-once="true" data-aos="fade-right" className="flex mt-4 items-center gap-4">
                <p className="text-gray-600 text-2xl line-through">₹ {product.price+100}</p>
                <p className=" text-3xl  font-medium text-red-600">₹ {product.price*quntity}</p>
            </span>
           <span data-aos-once="true" data-aos="fade-up" className="flex gap-5 items-center"><LiaShippingFastSolid className="mt-3 border-2 border-gray-300 rounded-full px-2 py-2" size={52}/>Door Delivary Available</span>
           <span data-aos-once="true" data-aos="fade-up" className="flex gap-5 items-center"><VscVerified className="mt-3 border-2 border-gray-300 rounded-full px-2 py-2" size={52}/>100% Genuine Product</span>
           <span data-aos-once="true" data-aos="fade-up" className="flex gap-5 items-center"><PiArrowsCounterClockwise className="mt-3 border-2 border-gray-300 rounded-full px-2 py-2" size={52}/>Easy 10 days return & <br/>exchange available</span>
           <hr className="mt-4"/>
           <div>
            <h2 data-aos-once="true" data-aos="fade-right" className="py-4 text-2xl">Related Products</h2>
            <div data-aos-once="true" data-aos="fade-up" className=" flex gap-2 relative  overflow-y-hidden overflow-scroll [&::-webkit-scrollbar]:hidden">
            {
                relatedProducts.map(products => {
                       return(
                        <Link className="w-[48%] min-w-[48%]" to={`/product/${products.id}`}>
                        <span className=" bg-red-500 text-white text-sm px-2 rounded-lg absolute top-2 left-2">8% OFF</span>
                            <img className=" h-[50%] w-[100%] object-contain border-2 rounded-lg px-2 py-2 " src={products.image} alt="product"/>
                            <h3 className="font-medium text-sm mt-1 line-clamp-2 h-[15%]">{products.name}</h3>
                            <span className="flex gap-3">
                                <p className="text-gray-600 line-through">₹ {products.price+100}</p>
                                <p className=" text-xl font-medium">₹ {products.price}</p>
                            </span>
                        <span className="text-green-600 font-medium text-sm flex gap-2 items-center"><PiPackageThin/>In Stock</span>
                    </Link>
                       )
                })
            }
           

          
          
            </div>
           </div>
        </div>
        <div data-aos-once="true" data-aos="fade-up" className="flex fixed bottom-12 py-3 px-3 left-0 w-full justify-between gap-2 bg-white shadow-[0px_-3px_10px_-1px_rgba(0,0,0,0.3)]">
                <span className="flex text-lg w-48 px-4 items-center justify-between border-2 rounded-lg">
                     <BiMinus size={22} onClick={decrease}/>
                     {quntity}
                     <GrFormAdd size={22} onClick={increase}/>
                </span>
                <button className="flex  gap-2 justify-center bg-[#03cd68] text-white text-lg font-semibold py-2 w-full rounded-lg"><AiOutlineShoppingCart size={22}/>Add to cart</button>
            </div>
        </>
    )
}

export default Product
import { useParams } from "react-router-dom"
import {BiMinus} from "react-icons/bi";
import {GrFormAdd} from "react-icons/gr";
import { useState } from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";

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
    return(
        <>        
        <div className="px-4 py-4">
            <img className="border-2 rounded-lg" src="https://klbtheme.com/partdo/wp-content/uploads/2022/10/1-31-600x600.jpg" alt="product"/>
            <h1 className="font-bold text-2xl mt-4">{params.title}</h1>
            <span className="flex mt-4 items-center gap-4">
                <p className="text-gray-600 text-2xl line-through">₹ {280}</p>
                <p className=" text-3xl  font-medium text-red-600">₹ {price*quntity}</p>
            </span>
            
        </div>
        <div className="flex fixed bottom-12 py-3 px-3 left-0 w-full justify-between gap-2 bg-white shadow-[0px_-3px_10px_-1px_rgba(0,0,0,0.3)]">
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
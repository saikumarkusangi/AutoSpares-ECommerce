import { Link } from "react-router-dom";
import EmptyCartImage from "../../assets/emptycart.png";
import { Helmet } from "react-helmet";
import {BiMinus} from "react-icons/bi";
import {GrFormAdd} from "react-icons/gr";
import { useState } from "react";

const Cart = ()=> {
    const products = [
        {
            "id": 1,
            "title": "Shell Rotella T1 SAE 30 Conventional Heavy Duty",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://klbtheme.com/partdo/wp-content/uploads/2022/10/1-31-600x600.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            "id": 2,
            "title": "Shell Rotella T1 SAE 30 Conventional Heavy Duty",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://klbtheme.com/partdo/wp-content/uploads/2022/10/1-31-600x600.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        }
    ]

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
        <div>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>My Cart | Sri Raghava Auto Spares</title>
        </Helmet>
        {products ?
           <div className="my-5 flex flex-col justify-center">
             {products.map(product => 
               <div>
               <div className="flex flex-row justify-center items-center pr-4 mt-4">
               <img className="h-32" src={product.image} alt="product"/>
               <span>
               <p className="line-clamp-3 font-base text-lg">{product.title}</p>
               <p className="text-2xl">₹ {product.price}</p>
               <div className="flex  py-3 px-2 left-0 justify-between gap-2 bg-white">
               <span className="flex text-lg w-[80%] h-10 px-4 items-center justify-between border-2 rounded-lg">
                    <BiMinus size={22} onClick={decrease}/>
                    {quntity}
                    <GrFormAdd size={22} onClick={increase}/>
               </span>
               <button className="bg-red-400 px-2 rounded-lg text-white font-medium">Remove</button>
           </div>
               </span> 
            </div>
            <hr className="h-[2px] bg-gray-200 mx-4"/>
               </div>
                )}
             <div className="w-[90%] mx-auto mt-5 px-4 py-2 rounded-md border-2 ">
                <h1 className="py-2 font-bold text-xl">CART TOTAL</h1>
                <hr className="h-[2px] bg-gray-200 mx-1 mt-3"/>
                <span className="flex justify-between my-4">
                 <p className="font-medium text-lg">Sub Total</p>
                 <p className="text-xl">₹ {products[0].price * quntity}</p>
                </span>
                <hr className="h-[2px] bg-gray-200 mx-1"/>
                <span className="flex justify-between my-4">
                <p className="font-medium text-lg">GST (2%)</p>
                <p className="text-xl">₹ {products[0].price * quntity + 80}</p>
               </span>
               <hr className="h-[2px] bg-gray-200 mx-1"/>
               <div>
                <span className="flex justify-between my-4">
                <p className="font-medium text-lg">Shipping</p>
                <p className="text-xl">₹ {80}</p>
                </span>
               </div>
              <hr className="h-[2px] bg-gray-200 mx-1"/>
              <span className="flex justify-between my-4">
              <p className="font-medium text-lg">Total</p>
              <p className="text-2xl font-semibold">₹ {products[0].price * quntity + 80 + 80}</p>
             </span>
             <Link to="https://mercury-t2.phonepe.com/transact/pg?token=ZGNmMTI0ZGQyZGYzMjg1YWNiYTlhM2NlNDliMjI3YjJkYzQ1NjYzYzAwMmExNzhkZDNkMWZkYTg2NmRkYTZhM2NjMzQwY2FlMDM5Y2NiMzBkMTdkNmNjZjYyNmU0ZTlmZjlhYTkzZTM0NWI4ODgzNTkwOGQ5NjpmOTVlNzMzOTEzYmIyODVjY2NiOTFlODUwMDc4NTA5Yg" >
                <div className="bg-green-500 text-center text-white text-lg py-4 px-2 font-medium rounded-lg mx-auto w-full mt-4">
                Proceed to checkout
                </div>
            </Link>
             </div>
            
           </div>
           :
           <div className="flex flex-col md:flex-row lg-flex-row items-center justify-around h-full px-5 py-5">
            <img className=" w-4/5 md:w-2/6 lg:w-2/6" src={EmptyCartImage} alt="empty cart"/>
            <div className="mt-5 md:mt-0 lg:mt-0 flex flex-col gap-3 md:gap-10 lg:gap-10">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#297078]">Your Cart Is Empty</h1>
            <Link to='/'> <button className="bg-[#326d74] w-full text-lg md:text-xl lg:text-2xl rounded-lg text-white shadow-md shadow-slate-400  py-2 md:px-4 md:py-4 lg:px-4 lg:py-4">Shop Now</button></Link>
            </div>
           </div>
        }
        </div>
    )
}

export default Cart;
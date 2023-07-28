import {PiPackageThin} from "react-icons/pi";
import {BsArrowRight} from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const LatestDeals = ()=> {
   const products = [
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 120
    }
    },
    {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
    "rate": 4.1,
    "count": 259
    }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
        "rate": 4.7,
        "count": 500
        }
        },
        {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
        "rate": 2.1,
        "count": 430
        }
        },
    ]  
 
    return(
        <div>
           <span className="flex justify-between px-2">
            <span>
                <h1 className="">Latest Deals for This Week</h1>
                <p className="text-sm text-gray-400 font-lightbold">Dont miss out this weeks deals</p>
            </span>
            <Link to="/shop/Latest Deals for This Week"><span className="flex flex-col-1 items-center gap-1 hover:text-red-600">View All<BsArrowRight/></span></Link>
           </span>
           <div className="flex  mx-2 gap-2 overflow-scroll [&::-webkit-scrollbar]:hidden">
           {products.map(product =>  (
            <ProductCard title={product.title} image={product.image} price={product.price}/>
          ))}
          </div>
        </div>
    )
}

export default LatestDeals;
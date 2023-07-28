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
    "title": "SnowyFox RV 15Amp to 50Amp Adapter – 15Male",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://klbtheme.com/partdo/wp-content/uploads/2022/10/1-32-600x600.jpg",
    "rating": {
    "rate": 4.1,
    "count": 259
    }
    },
    {
        "id": 3,
        "title": "Spec-D® – Projector Headlights",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://klbtheme.com/partdo/wp-content/uploads/2022/10/1-33-600x600.jpg",
        "rating": {
        "rate": 4.7,
        "count": 500
        }
        },
        {
        "id": 4,
        "title": "Car Charger, AINOPE Smallest 4.8A",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://klbtheme.com/partdo/wp-content/uploads/2022/10/1-4.jpg",
        "rating": {
        "rate": 2.1,
        "count": 430
        }
        },
    ]  
 
    return(
        <div className="mt-5">
           <span className="flex justify-between px-4">
            <span>
                <h1 className="text-2xl font-lightbold">Latest Deals</h1>
                <p className="text-sm text-gray-400 font-lightbold">Dont miss out this weeks deals</p>
            </span>
            <Link to="/shop/Latest Deals"><span className="flex flex-col-1 items-center gap-1 hover:text-red-600">View All<BsArrowRight/></span></Link>
           </span>
           <div className="flex pl-2 pt-2  mx-2 gap-2 overflow-y-hidden overflow-scroll [&::-webkit-scrollbar]:hidden">
           {products.map(product =>  (
            <ProductCard title={product.title} image={product.image} price={product.price}/>
          ))}
          </div>
        </div>
    )
}

export default LatestDeals;
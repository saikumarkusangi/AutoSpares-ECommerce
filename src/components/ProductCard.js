import {PiPackageThin} from "react-icons/pi";
import { Link } from "react-router-dom";

const ProductCard = ({title,image,price,id})=> {
   const placeholderImage = 'https://joadre.com/wp-content/uploads/2019/02/no-image.jpg';
  {/*${title.replace(/ /g,"-")}*/}
  return(
    <div data-aos-once="true" data-aos="fade-right" className="w-[48%] min-w-[48%] max-w-[48%] justify-between flex flex-col relative">
    <Link className="" to={`/product/${id}`} >
        <span className=" bg-red-500 text-white text-sm px-2 rounded-lg absolute top-2 left-2">8% OFF</span>
            <div className="w-full border-2 rounded-lg px-2 py-2 ">
            <img className="w-full h-48 object-contain " src={image} alt="product" onError={(e) => {
              e.target.src = placeholderImage; // Set placeholder image on error
          }}/>
            </div>
            <h3 className="font-medium text-sm mt-1 line-clamp-2 h-10">{title}</h3>
            <p className="text-gray-600 line-through">₹ {price+100}</p>
            <p className=" text-xl font-medium">₹ {price}</p>
        <span className="text-green-600 font-medium text-sm flex gap-2 items-center"><PiPackageThin/>In Stock</span>
    </Link>
    <button className="bg-[#326d74] font-medium text-white  py-2 px-2 rounded-lg w-full " >Add to cart</button>
    </div>
  )
}

export default ProductCard;
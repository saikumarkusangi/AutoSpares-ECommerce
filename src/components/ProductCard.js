import {PiPackageThin} from "react-icons/pi";

const ProductCard = ({title,image,price})=> {
   
  return(
    <div className="w-[48%]  flex flex-col min-w-[48%]  relative">
    <span className=" bg-red-500 text-white text-sm px-2 rounded-lg absolute top-2 left-2">8% OFF</span>
        <img className="h-[50%] w-[100%] object-contain border-2 rounded-lg px-2 py-2 " src={image} alt="product"/>
        <h3 className="font-medium text-sm mt-1 line-clamp-2 h-[20%]">{title}</h3>
        <p className="text-gray-600 line-through">₹ {price+Math.floor(Math.random()*10)}</p>
        <p className=" text-xl font-medium">₹ {price}</p>
    <span className="text-green-600 font-medium text-sm flex gap-2 items-center"><PiPackageThin/>In Stock</span>
    <button className="bg-[#326d74] font-medium text-white  py-2 px-2 rounded-lg w-full mt-2" >Add to cart</button>
</div>
  )
}

export default ProductCard;
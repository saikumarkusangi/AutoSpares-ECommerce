import { Link } from "react-router-dom";
import EmptyCartImage from "../../assets/emptycart.png";
import { Helmet } from "react-helmet";

const Cart = ()=> {
    return(
        <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>My Cart | Sri Raghava Auto Spares</title>
        </Helmet>
        <div className="flex flex-col md:flex-row lg-flex-row items-center justify-around h-full px-5 py-5">
            <img className="w-4/5 md:w-2/6 lg:w-2/6" src={EmptyCartImage} alt="empty cart"/>
            <div className="mt-5 md:mt-0 lg:mt-0 flex flex-col gap-3 md:gap-10 lg:gap-10">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#297078]">Your Cart Is Empty</h1>
            <Link to='/'> <button className="bg-[#326d74] w-full text-lg md:text-xl lg:text-2xl rounded-lg text-white shadow-md shadow-slate-400  py-2 md:px-4 md:py-4 lg:px-4 lg:py-4">Shop Now</button></Link>
            </div>
            
        </div>
        </>
    )
}

export default Cart;
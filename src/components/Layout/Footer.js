import { Link } from "react-router-dom"


const Footer = ()=> {
    return(
        <div className=" w-full h-max bg-[#326d74] py-5 text-center mt-5 mb-14">
            <p className="text-sm text-white mb-2">All Rights Reserved &copy; Sri Raghava Auto Spares.</p>
            <span className="text-white ">
                <Link to='/privacy-policy'>Privacy Policy | </Link>
                <Link to='/terms-conditions'>Terms and Conditions</Link>
            </span>
            <br/>
            <Link className="text-white" to="/refund-policy">Refund Policy</Link>
        </div>
    )
}

export default Footer
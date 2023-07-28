import { Link } from "react-router-dom";
import PageNotFoundImage from "../../assets/pagenotfound.gif";
import { Helmet } from "react-helmet";

const PageNotFount = ()=> {
    return(
        <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>Page Not Found | Sri Raghava Auto Spares</title>
        </Helmet>
        <div className="h-max flex flex-col items-center">
            <img className="w-full md:w-2/5 lg:w-2/5" src={PageNotFoundImage} alt="page not found"/>
            <Link to='/'> <button className="bg-[#326d74] w-full text-lg md:text-xl lg:text-xl rounded-lg text-white shadow-md shadow-slate-400 px-4 py-2">Go to Home</button></Link>
        </div>
        </>
    )
}

export default PageNotFount
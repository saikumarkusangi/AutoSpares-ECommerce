
import Footer from "./Footer";
import Header from "./Header";
import {BsFillPersonFill,BsListUl} from 'react-icons/bs';
import {BiHomeAlt} from "react-icons/bi";
import {VscAccount} from "react-icons/vsc";
import {FiSearch} from "react-icons/fi";

const Layout = ({children,title}) => {
    

    return(
        <div>
           <Header/>
            <main>
              {children}
            </main>
            <Footer/>
            <div className="flex px-6 py-1  justify-between bg-white border-t-[#0000012b]  border-2 w-full fixed bottom-0">
                <span className="flex flex-col gap-1 items-center text-xs text-gray-500"><BiHomeAlt size={22}/> HOME</span>
                <span className="flex flex-col gap-1 items-center text-xs text-gray-500"><BsListUl size={22}/> CATEGORIES</span>
                <span className="flex flex-col gap-1 items-center text-xs text-gray-500"><FiSearch size={22}/> SEARCH</span>
                <span className="flex flex-col gap-1 items-center text-xs text-gray-500"><VscAccount size={22}/> ACCOUNT</span>
            </div>
        </div>
    )
}

export default Layout;
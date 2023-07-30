import {BsListUl} from 'react-icons/bs';
import {BiHomeAlt} from "react-icons/bi";
import {VscAccount} from "react-icons/vsc";
import {FiSearch} from "react-icons/fi";
import { Link } from 'react-router-dom';

const BottomNav = () => {
         return(
            <div className="flex px-6 py-1  justify-between bg-white border-t-[#0000012b]  border-2 w-full fixed bottom-0">
                <Link to="/" className="flex flex-col gap-1 items-center text-xs text-gray-500"><BiHomeAlt size={22}/> HOME</Link>
                <Link to="/categories" className="flex flex-col gap-1 items-center text-xs text-gray-500"><BsListUl size={22}/> CATEGORIES</Link>
                <Link className="flex flex-col gap-1 items-center text-xs text-gray-500"><FiSearch size={22}/> SEARCH</Link>
                <Link to="/account" className="flex flex-col gap-1 items-center text-xs text-gray-500"><VscAccount size={22}/> ACCOUNT</Link>
            </div>
         )
}

export default BottomNav
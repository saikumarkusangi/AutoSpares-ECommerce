

const SearchForm = ()=> {
    return(
        <div className="w-fullch-full px-4 py-4 mt-5">
            <h1 className="text-2xl font-bold text-[#1d575e] text-center mt-5 mb-12">Find the Right Parts Faster</h1>
            
            <form className="flex flex-col gap-6 px-2 mb-10">
                <select className="outline-none focus:border-2 border-blue-400 py-4 px-2 rounded-md">
                    <option>Select Brand</option>
                    <option>Royal Enfield</option>
                    <option>Bajaj</option>
                </select>
                <select className="outline-none focus:border-2 border-blue-400 py-4 px-2 rounded-md">
                    <option>Select Model</option>
                    <option>Thunder bird</option>
                    <option>Bullet</option>
                </select>
                <select className="outline-none focus:border-2 border-blue-400 py-4 px-2 rounded-md">
                    <option>Select Spare Category</option>
                    <option>Side Mirror</option>
                    <option>HeadLight</option>
                </select>
                <button className="bg-[#326d74] py-3 w-full rounded-md text-white font-medium">Find Auto Parts</button>
            </form>
        </div>
    )
}


export default SearchForm;
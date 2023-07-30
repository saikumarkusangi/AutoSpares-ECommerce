import Collections from "../Collections";

const CollectionsList = [
    {
        name:'Brake Disc Caliper',
        image:'https://t4.ftcdn.net/jpg/04/23/88/79/360_F_423887932_FchfRh9HCSN5xc0NLfVFncgxG4AMCYKH.jpg'
    },
    {
        name:'Brake Disc Plate',
        image:'https://m.media-amazon.com/images/I/61WTtYwXwnL.jpg'
    },
    {
        name:'Brake Drum',
        image:'https://www.my-cardictionary.com/fileadmin/user_upload/Inhalt/Produkte/Bremstrommel/bremstrommel_734x350_w734.jpg'
    },
    {
        name:'Headlight Set',
        image:'https://www.partsbigboss.in/media/catalog/product/i/m/image_9492.jpg'
    },
    {
        name:'Silencer',
        image:'https://5.imimg.com/data5/SELLER/Default/2022/4/DZ/RN/FC/12994953/motorcycle-silencers-500x500.png'
    }
]

const Categories = () => {
    return(
        <div className="">
            <h1 className="px-4 py-4 text-2xl font-lightbold">Categories</h1>
            <div className="flex flex-wrap gap-2 px-4">
              {CollectionsList.map(categorie => (
                <div className="relative w-[48%] h-32 rounded-md overflow-hidden">
                    <img className="object-cover h-32 w-full" src={categorie.image} alt="pic"/>
                    <div className="absolute z-40 top-0 bg-gradient-to-t from-[#00000087] to-[#00000087] h-full w-full text-center flex flex-col justify-center py-4 text-2xl font-semibold text-white line-clamp-3">{categorie.name}</div>
                </div>
              ))}
            </div>
        </div>
    )
}

export default Categories;
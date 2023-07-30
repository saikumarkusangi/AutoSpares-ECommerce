import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import { GoFilter } from "react-icons/go";
import { AiOutlineSortAscending } from "react-icons/ai";

const Shop = () => {
    const params = useParams();
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

    return (
        <div className=" h-full px-2 mt-5">
            <h1 className="text-2xl font-lightbold px-2">{params.heading}</h1>
            <div className="flex flex-wrap mx-2 gap-2 mt-5 ">
                {products.map(product => (
                    <ProductCard title={product.title} image={product.image} price={product.price} />
                ))}
            </div>
            <div className=" flex fixed bottom-12 py-4 px-4 left-0 w-full justify-between bg-white shadow-[0px_-3px_10px_-1px_rgba(0,0,0,0.3)]">
                <form class="flex w-full justify-between" method="get">
                    <span className="flex">
                        <GoFilter size={24} />
                        <select name="filter" className="w-32 bg-transparent focus:outline-none" aria-label="Shop order">
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date" selected="selected">Filter</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                        </select>
                    </span>
                    <span className="flex">
                        <AiOutlineSortAscending size={24} />
                        <select name="orderby" className="w-32 bg-transparent focus:outline-none" aria-label="Shop order">
                            <option value="popularity">Sort by Latest</option>
                            <option value="date" selected="selected">Sort by Instock</option>
                            <option value="price">Price : Low to High</option>
                            <option value="price-desc">Price : High to Low</option>
                        </select>
                    </span>
                </form>
            </div>
            
        </div>
    )
}

export default Shop;
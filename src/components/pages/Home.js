import Collections from "../Collections"
import Banner from "../Banner"
import SearchForm from "../SearchForm"
import LatestDeals from "../LatestDeals"
import { Helmet } from "react-helmet"


const Home = () => {
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Sri Raghava Auto Spares</title>
                <link rel="canonical" href=""/>
            </Helmet>
            <Banner/>
            <LatestDeals/>
            <Collections/>
        </div>
    )
}

export default Home

import Footer from "./Footer";
import Header from "./Header";
import BottomNav from "./BottomNav";

const Layout = ({children,title}) => {
    

    return(
        <div>
           <Header/>
            <main className="min-h-screen">
              {children}
            </main>
            <Footer/>
            <BottomNav/>
        </div>
    )
}

export default Layout;
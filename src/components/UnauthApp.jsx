import { Footer } from "./Footer"
import { Header } from "./Header";
import { Nav } from "./Navbar";

const UnauthApp = () => {

    return (
        <div className="bg-[url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg')] bg-no-repeat bg-center bg-cover">
            <Nav/>
            <Header/>
            <Footer/>
        </div>
    )
}

export default UnauthApp

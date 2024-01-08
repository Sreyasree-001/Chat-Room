import { Footer } from "./Footer"
import { Header } from "./Header";
import { Nav } from "./Navbar";

const UnauthApp = () => {

    return (
        <div className="bg-[url('https://images.pexels.com/photos/12732218/pexels-photo-12732218.jpeg?cs=srgb&dl=pexels-steve-johnson-12732218.jpg&fm=jpg')] bg-no-repeat bg-center bg-cover">
            <Nav/>
            <Header/>
            <Footer/>
        </div>
    )
}

export default UnauthApp

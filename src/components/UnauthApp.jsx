import { Footer } from "./Footer"
import { Header } from "./Header";
import { Nav } from "./Navbar";

const UnauthApp = () => {

    return (
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehIB11tqKnKhNn53ATGUSYqq4vs5WkdQ2Yg&usqp=CAU')] bg-no-repeat bg-center bg-cover">
            <Nav/>
            <Header/>
            <Footer/>
        </div>
    )
}

export default UnauthApp

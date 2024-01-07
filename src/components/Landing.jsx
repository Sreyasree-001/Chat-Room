import { Content } from "./Content";
import { Nav } from "./Navbar";
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom";

const Landing = () => {
    const user = localStorage.getItem('user');
    return (
        <>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehIB11tqKnKhNn53ATGUSYqq4vs5WkdQ2Yg&usqp=CAU')] bg-no-repeat bg-center bg-cover">
                <Nav user={user} />
                <Content />
                <Footer />
            </div>

        </>
    )
}

export default Landing
